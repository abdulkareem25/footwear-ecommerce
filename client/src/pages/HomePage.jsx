import { Link, Navigate } from 'react-router-dom';
import Spinner from '../components/ui/Spinner';
import Message from '../components/ui/Message';

const HomePage = () => {


  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-cyan-100">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">Premium Women's Footwear</h2>
          <p className="text-lg text-gray-600 mb-8">Crafted in Mumbai for the Modern, Confident Woman</p>
          <Link to="/shop" className="bg-teal-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-lg">
            Shop Collection
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800">Featured Products</h3>
            <Link to="/shop" className="text-teal-600 hover:underline font-medium">View All</Link>
          </div>
          {/* {loading ? (
            <Spinner />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : ( */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))} */}
            Home Page
          </div>
          {/* // )} */}
        </div>
      </section>
    </>
  );
};

export default HomePage;