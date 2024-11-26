import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 170);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClass = `fixed top-10 z-50 duration-300 py-1 ${
    isScrolled ? "bg-white shadow-lg" : "bg-transparent bg-gray-100/20"
  }`;

  const linkClass = () =>
    `relative text-${isScrolled ? "gray-700" : "white"} hover:text-primary-500 transition-colors`;

  const linkUnderline = {
    initial: { width: 0 },
    hover: { width: "100%" },
  };

  return (
    <nav
    className="flex justify-center items-center align-center">
      <div style={{borderRadius: "5px"}} className={`w-full max-w-6xl ${navbarClass}`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              {/* <img src="/images/SMP_logo2.png" width={150} height={100} alt="" /> */}
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span style={{fontSize:'20px',
                // marginLeft:'-20px'
              }}
                  className={`font-bold ${
                    isScrolled ? "text-[#0040ff]" : "text-[#3366ff]"
                  }`}
                >FRUITY
                  {/* SMP MALIGAI STORE */}
                </span>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {["/", "/products", "/about", "/contact"].map((path, index) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 3) }}
                >
                  <Link to={path} className={linkClass()}>
                    <span>
                      {path === "/"
                        ? "Home"
                        : path.slice(1).charAt(0).toUpperCase() +
                          path.slice(2)}
                    </span>
                    {location.pathname === path && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-primary-500"
                        initial="initial"
                        animate="hover"
                        variants={linkUnderline}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-4"
              >
                <button
                  className={`${
                    isScrolled ? "text-gray-700" : "text-white"
                  } hover:text-primary-500`}
                >
                  <User size={24} />
                </button>
                <button
                  className={`${
                    isScrolled ? "text-gray-700" : "text-white"
                  } hover:text-primary-500 relative`}
                >
                  <ShoppingCart size={24} />
                  <span className="absolute -top-2 -right-2 bg-primary-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    3
                  </span>
                </button>
              </motion.div> */}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${
                  isScrolled ? "text-gray-700" : "text-white"
                } hover:text-primary-500`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {["/", "/products", "/about", "/contact"].map((path) => (
                  <Link
                    key={path}
                    to={path}
                    className="block px-3 py-2 text-gray-700 hover:text-primary-500 hover:bg-primary-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {path === "/"
                      ? "Home"
                      : path.slice(1).charAt(0).toUpperCase() +
                        path.slice(2)}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
