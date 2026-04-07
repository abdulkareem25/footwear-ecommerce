import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import Spinner from '../components/ui/Spinner';
import Message from '../components/ui/Message';

const ShopPage = () => {
  const { products, loading, error, getProducts } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    price: '',
    sortBy: 'featured'
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let tempProducts = [...products];
    
    if (filters.category) {
        tempProducts = tempProducts.filter(p => p.category === filters.category);
    }

    if (filters.price) {
        const [min, max] = filters.price.split('-');
        tempProducts = tempProducts.filter(p => p.price >= parseInt(min) && (max ? p.price <= parseInt(max) : true));
    }

    switch(filters.sortBy) {
        case 'price-low':
          tempProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          tempProducts.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          tempProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          break;
        case 'rating':
          tempProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
          break;
        default: // featured
          tempProducts.sort((a, b) => (b.isFeatured ? 1 : -1) - (a.isFeatured ? 1 : -1));
    }

    setFilteredProducts(tempProducts);
  }, [products, filters]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({...prevFilters, [filterName]: value}));
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters */}
        <ProductFilter 
            filters={filters} 
            onFilterChange={handleFilterChange} 
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
        />
        
        {/* Products */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-6">
              <button className="lg:hidden p-2 border rounded-md" onClick={() => setIsFilterOpen(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </button>
              <span className="text-gray-600">{filteredProducts.length} Products Found</span>
              <select 
                className="form-select block w-48 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" 
                value={filters.sortBy} 
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="rating">Highest Rated</option>
              </select>
          </div>
          {loading ? (
            <Spinner />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;