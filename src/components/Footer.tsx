// import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer   style={{
      backgroundImage: `url('/images/back.png')`,

      
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    className="text-white">
  <div className="bg-opacity-70">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-green-500 mb-4">FreshMart</h3>
          <p className="text-gray-400">
            Your one-stop shop for fresh, organic, and healthy groceries delivered right to your doorstep.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Fresh Produce</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Dairy & Eggs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Meat & Seafood</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Bakery</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Beverages</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <MapPin size={20} className="text-green-500" />
              <span className="text-gray-400">123 Grocery Street, Food City, FC 12345</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={20} className="text-green-500" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={20} className="text-green-500" />
              <span className="text-gray-400">info@freshmart.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8">
        <p className="text-center text-gray-400">© 2024 FreshMart. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;