import React from 'react';

const categories = ['Heels', 'Flats', 'Boots', 'Sandals', 'Sneakers'];
const priceRanges = [
    { label: 'All', value: ''},
    { label: 'Under ₹5,000', value: '0-4999' },
    { label: '₹5,000 - ₹9,999', value: '5000-9999' },
    { label: '₹10,000 - ₹14,999', value: '10000-14999' },
    { label: 'Above ₹15,000', value: '15000' }
];

const ProductFilter = ({ filters, onFilterChange, isOpen, setIsOpen }) => {
  const handleClearFilters = () => {
    onFilterChange('category', '');
    onFilterChange('price', '');
  }

  return (
    <>
        {/* Overlay for mobile */}
        <div 
            className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar */}
        <aside className={`fixed top-0 left-0 w-72 h-full bg-white shadow-xl z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:static lg:transform-none lg:shadow-none lg:w-1/4 lg:h-auto lg:bg-transparent lg:border-r lg:pr-8`}>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h4 className="text-xl font-semibold">Filters</h4>
                    <button className="lg:hidden" onClick={() => setIsOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                
                {/* Category Filter */}
                <div className="mb-6">
                    <h5 className="font-semibold mb-3">Category</h5>
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input type="radio" className="form-radio text-teal-600" name="category" value="" checked={filters.category === ''} onChange={(e) => onFilterChange('category', e.target.value)} />
                            <span className="ml-2 text-gray-700">All</span>
                        </label>
                        {categories.map(cat => (
                            <label className="flex items-center" key={cat}>
                                <input type="radio" className="form-radio text-teal-600" name="category" value={cat} checked={filters.category === cat} onChange={(e) => onFilterChange('category', e.target.value)} />
                                <span className="ml-2 text-gray-700">{cat}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                    <h5 className="font-semibold mb-3">Price Range</h5>
                    <div className="space-y-2">
                        {priceRanges.map(range => (
                            <label className="flex items-center" key={range.value}>
                                <input type="radio" className="form-radio text-teal-600" name="price" value={range.value} checked={filters.price === range.value} onChange={(e) => onFilterChange('price', e.target.value)} />
                                <span className="ml-2 text-gray-700">{range.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <button onClick={handleClearFilters} className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors">
                  Clear Filters
                </button>
            </div>
        </aside>
    </>
  );
};

export default ProductFilter;