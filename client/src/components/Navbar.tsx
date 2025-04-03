import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click on navigation link
  const handleNavLinkClick = (id: string) => {
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    // Smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-opacity-95 transition-all duration-300 ${
        isScrolled ? "py-2 bg-[#0A0A0A]" : "py-4 bg-[#0A0A0A]"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          className="text-2xl font-bold text-white font-['Montserrat']"
          onClick={() => handleNavLinkClick("hero")}
        >
          <span className="text-primary">HS</span>-GROUP
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a 
            href="#about" 
            className="text-white hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("about");
            }}
          >
            O nás
          </a>
          <a 
            href="#services" 
            className="text-white hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("services");
            }}
          >
            Služby
          </a>
          <a 
            href="#portfolio" 
            className="text-white hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("portfolio");
            }}
          >
            Portfolio
          </a>
          <a 
            href="#history" 
            className="text-white hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("history");
            }}
          >
            Historie
          </a>
          <a 
            href="#team" 
            className="text-white hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("team");
            }}
          >
            Tým
          </a>
          <a 
            href="#contact" 
            className="text-white hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("contact");
            }}
          >
            Kontakt
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <Menu className="text-xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0A0A] absolute w-full py-4 px-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("about");
                }}
              >
                O nás
              </a>
              <a 
                href="#services" 
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("services");
                }}
              >
                Služby
              </a>
              <a 
                href="#portfolio" 
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("portfolio");
                }}
              >
                Portfolio
              </a>
              <a 
                href="#history" 
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("history");
                }}
              >
                Historie
              </a>
              <a 
                href="#team" 
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("team");
                }}
              >
                Tým
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("contact");
                }}
              >
                Kontakt
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
