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
          className="flex items-center"
          onClick={() => handleNavLinkClick("hero")}
        >
          <svg width="40" height="36" viewBox="0 0 50 45" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M10 5 L20 5 L25 40 L15 40 Z" fill="#ff0000" stroke="#000" strokeWidth="1.5" />
            <path d="M30 5 L40 5 L35 40 L25 40 Z" fill="#ff0000" stroke="#000" strokeWidth="1.5" />
            <circle cx="40" cy="22" r="10" fill="#000" stroke="#ff0000" strokeWidth="1.5" />
            <path d="M36 18 C36 18, 44 18, 44 22 C44 26, 36 26, 36 26" fill="none" stroke="#ff0000" strokeWidth="1.5" />
          </svg>
          <span className="text-2xl font-bold text-white font-['Montserrat']">
            <span className="text-primary">HS</span>-GROUP
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a 
            href="#services" 
            className="text-white hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("services");
            }}
          >
            Právní služby HS
          </a>
          <a 
            href="#accounting" 
            className="text-white hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("accounting");
            }}
          >
            Správa účetnictví HS
          </a>
          <a 
            href="#tax" 
            className="text-white hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("tax");
            }}
          >
            Daňové poradenství HS
          </a>
          <a 
            href="#liquidation" 
            className="text-white hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("liquidation");
            }}
          >
            Likvidace firem HS
          </a>
          <a 
            href="#realestate" 
            className="text-white hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("realestate");
            }}
          >
            Realitní agentura HS
          </a>
          <a 
            href="#construction" 
            className="text-white hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("construction");
            }}
          >
            Stavební činnost HS
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
                href="#services" 
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("services");
                }}
              >
                Právní služby HS
              </a>
              <a 
                href="#accounting" 
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("accounting");
                }}
              >
                Správa účetnictví HS
              </a>
              <a 
                href="#tax" 
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("tax");
                }}
              >
                Daňové poradenství HS
              </a>
              <a 
                href="#liquidation" 
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("liquidation");
                }}
              >
                Likvidace firem HS
              </a>
              <a 
                href="#realestate" 
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("realestate");
                }}
              >
                Realitní agentura HS
              </a>
              <a 
                href="#construction" 
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("construction");
                }}
              >
                Stavební činnost HS
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
