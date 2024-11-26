import  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Truck, Clock, Shield } from "lucide-react";
import { ArrowLeft } from "lucide-react";


import Testimonial from "./Testimonial";
import { useInView } from "react-intersection-observer";
import About from "./About";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image data for the slider
  const images = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1557844352-761f2565b576?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  ];

  // Auto slider effect: changes the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // const containerVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.6,
  //       staggerChildren: 0.2
  //     }
  //   }
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.6 }
  //   }
  // };
  const [categoriesRef] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const categories = [
    {
      title: "Fresh Produce",
      image:
        "https://images.unsplash.com/photo-1557844352-761f2565b576?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Dairy & Eggs",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Meat & Seafood",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Bakery",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Beverages",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Snacks",
      image:
        "https://images.unsplash.com/photo-1600292090495-0cc56c2fce92?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Frozen Foods",
      image:
        "https://images.unsplash.com/photo-1611259684007-20b303e07133?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Health & Wellness",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategoryIndex(
        (prevIndex) => (prevIndex + 1) % categories.length
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, [categories.length]);

  const goToNextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const goToPreviousCategory = () => {
    setCurrentCategoryIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
  };
  const testimonials = [
    {
      name: "Esther Howard",
      role: "Nursing Assistant",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc viverra.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Courtney Henry",
      role: "Nursing Assistant",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc viverra.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
  ];

  const features = [
    {
      icon: <Truck className="text-purple-500" size={40} />,
      title: "Free Shipping",
      description: "Free shipping on all orders",
      bgColor: "bg-purple-100",
      bglight: "bg-purple-50",
    },
    {
      icon: <Clock className="text-orange-500" size={40} />,
      title: "Support 24/7",
      description: "Support 24 hours a day",
      bgColor: "bg-orange-100",
      bglight: "bg-orange-50",
    },
    {
      icon: <Shield className="text-blue-500" size={40} />,
      title: "100% Secured Payment",
      description: "Back Guarantee under 5 days",
      bgColor: "bg-blue-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 1, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Auto-Slider */}
      <section className="relative h-[100vh] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence>
            {/* Slider images with transition effects */}
            <motion.div
              key={currentImageIndex}
              className="w-full h-full"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <img
                src={images[currentImageIndex]}
                alt="Fresh produce"
                className="w-full h-full object-cover opacity-40"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Fresh & Healthy
              <br />
              <span className="text-primary-400">Groceries</span> Delivered
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl"
            >
              Experience premium quality groceries delivered right to your
              doorstep. Fresh, organic, and handpicked just for you.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-600 transition-colors flex items-center space-x-2 shadow-lg"
            >
              <span>Shop Now</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <div style={{display:'flex',justifyContent:'center',marginTop:'10px',marginBottom:'-30px'}}>
        <img width={100} height={150} src="images/bg.png" alt="" />
      </div>
      <section style={{position:'relative',marginBottom:'10px'}} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              
              <div
              style={{ backgroundColor: feature?.bgColor}}
                key={index}
                className={`flex items-center gap-6 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${feature.bgColor}`}
                >
              

                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full ${feature.bgColor}`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </section>
      <section className="py-20">
      <div style={{marginTop:'-60px',display:'flex',justifyContent:'end',marginRight:'80px'}}>
        <img width={100} height={150} src="images/bg.png" alt="" />
      </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={categoriesRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Featured Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our wide selection of premium quality products
            </p>
          </motion.div>
          <div style={{marginTop:'-60px',}}>
        <img width={100} height={150} src="images/bg.png" alt="" />
      </div>
          {/* Categories Slider with Manual Controls */}
          <div className="relative">
            {/* Wrapper for the image slider */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentCategoryIndex * (100 / 5)
                  }%)`, // Adjust for 5 images in view
                }}
              >
                {/* Map categories and display them */}
                {categories.map((category, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative w-full sm:w-1/2 md:w-1/3 flex-shrink-0 p-4 group"
                  >
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        style={{ borderRadius: "20px" }}
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:opacity-90" // Hover effect: scale and opacity
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-10">
                      <h3 className="text-white text-xl font-semibold transition-all duration-300 transform group-hover:scale-105 group-hover:text-yellow-400">
                        {category.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPreviousCategory}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-xl hover:bg-gray-100 transition-all"
            >
              <ArrowLeft size={24} className="text-primary-500" />
            </button>

            <button
              onClick={goToNextCategory}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-xl hover:bg-gray-100 transition-all"
            >
              <ArrowRight size={24} className="text-primary-500" />
            </button>
          </div>
        </div>
      </section>
      <div style={{marginTop:'-20px',display:'flex',justifyContent:'end',marginRight:'80px'}}>
        <img width={100} height={150} src="images/bg1.png" alt="" />
      </div>
      <Testimonial/>
     
      <About />
      
      
    </div>
  );
};

export default Home;
