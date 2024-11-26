import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Organic Bananas",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=600&q=80",
    category: "Fruits"
  },
  {
    id: 2,
    name: "Fresh Strawberries",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80",
    category: "Fruits"
  },
  {
    id: 3,
    name: "Organic Milk",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80",
    category: "Dairy"
  },
  {
    id: 4,
    name: "Fresh Bread",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    category: "Bakery"
  },
  {
    id: 5,
    name: "Organic Eggs",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80",
    category: "Dairy"
  },
  {
    id: 6,
    name: "Fresh Tomatoes",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfca?auto=format&fit=crop&w=600&q=80",
    category: "Vegetables"
  }
];

const Products = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Heart size={20} className="text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                <span className="text-sm text-green-600 font-semibold">{product.category}</span>
                <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-700">
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;