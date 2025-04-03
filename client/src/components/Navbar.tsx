import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/";

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

  // Handle click on navigation link for home page scrolling
  const handleNavLinkClick = (id: string) => {
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    // Smooth scroll to section only on home page
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:block bg-black text-gray-300 py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+420608187355" className="flex items-center hover:text-primary transition-colors duration-300">
              <Phone className="h-4 w-4 mr-2" />
              +420 608 187 355
            </a>
            <a href="mailto:Info@hsstavbygroup.cz" className="flex items-center hover:text-primary transition-colors duration-300">
              <Mail className="h-4 w-4 mr-2" />
              Info@hsstavbygroup.cz
            </a>
          </div>
          <div>
            <span className="text-gray-400">Profesionální poradenství a služby</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 shadow-lg transition-all duration-300 ${
          isScrolled 
            ? "py-2 bg-black/95 backdrop-blur-sm border-b border-gray-800" 
            : "py-4 bg-gradient-to-b from-black/95 to-black/75 md:mt-9"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group"
          >
            <div className="relative">
              <svg width="40" height="36" viewBox="0 0 50 45" xmlns="http://www.w3.org/2000/svg" className="mr-2 transition-transform duration-500 group-hover:scale-110">
                <path d="M10 5 L20 5 L25 40 L15 40 Z" fill="#ff0000" stroke="#000" strokeWidth="1.5" />
                <path d="M30 5 L40 5 L35 40 L25 40 Z" fill="#ff0000" stroke="#000" strokeWidth="1.5" />
                <circle cx="40" cy="22" r="10" fill="#000" stroke="#ff0000" strokeWidth="1.5" />
                <path d="M36 18 C36 18, 44 18, 44 22 C44 26, 36 26, 36 26" fill="none" stroke="#ff0000" strokeWidth="1.5" />
              </svg>
              <div className="absolute -inset-1 bg-red-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white font-['Montserrat']">
                <span className="text-primary">HS</span> Group
              </span>
              <span className="text-xs text-gray-400 -mt-1">Profesionální služby</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {isHomePage ? (
              <>
                <NavLink href="/pravni-sluzby" isActive={false}>Právní služby</NavLink>
                <NavLink href="/sprava-ucetnictvi" isActive={false}>Účetnictví</NavLink>
                <NavLink href="/danove-poradenstvi" isActive={false}>Daňové poradenství</NavLink>
                <NavLink href="/likvidace-firem" isActive={false}>Likvidace firem</NavLink>
                <NavLink href="/realitni-agentura" isActive={false}>Reality</NavLink>
                <NavLink href="/stavebni-cinnost" isActive={false}>Stavební činnost</NavLink>
                <NavLink href="/kontakt" isActive={false}>Kontakt</NavLink>
              </>
            ) : (
              <>
                <NavLink href="/pravni-sluzby" isActive={location === "/pravni-sluzby"}>Právní služby</NavLink>
                <NavLink href="/sprava-ucetnictvi" isActive={location === "/sprava-ucetnictvi"}>Účetnictví</NavLink>
                <NavLink href="/danove-poradenstvi" isActive={location === "/danove-poradenstvi"}>Daňové poradenství</NavLink>
                <NavLink href="/likvidace-firem" isActive={location === "/likvidace-firem"}>Likvidace firem</NavLink>
                <NavLink href="/realitni-agentura" isActive={location === "/realitni-agentura"}>Reality</NavLink>
                <NavLink href="/stavebni-cinnost" isActive={location === "/stavebni-cinnost"}>Stavební činnost</NavLink>
                <NavLink href="/kontakt" isActive={location === "/kontakt"}>Kontakt</NavLink>
              </>
            )}
          </div>
          
          {/* Contact button */}
          <div className="hidden md:block">
            <Link href="/kontakt" className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white px-5 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 flex items-center space-x-1">
              <span>Domluvit konzultaci</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-300" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="lg:hidden bg-black/95 backdrop-blur-md absolute w-full overflow-hidden border-t border-gray-800"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-1 gap-1">
                  <MobileNavLink 
                    href="/pravni-sluzby" 
                    isActive={location === "/pravni-sluzby"}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Právní služby HS
                  </MobileNavLink>
                  <MobileNavLink 
                    href="/sprava-ucetnictvi" 
                    isActive={location === "/sprava-ucetnictvi"}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Správa účetnictví HS
                  </MobileNavLink>
                  <MobileNavLink 
                    href="/danove-poradenstvi" 
                    isActive={location === "/danove-poradenstvi"}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Daňové poradenství HS
                  </MobileNavLink>
                  <MobileNavLink 
                    href="/likvidace-firem" 
                    isActive={location === "/likvidace-firem"}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Likvidace firem HS
                  </MobileNavLink>
                  <MobileNavLink 
                    href="/realitni-agentura" 
                    isActive={location === "/realitni-agentura"}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Realitní agentura HS
                  </MobileNavLink>
                  <MobileNavLink 
                    href="/stavebni-cinnost" 
                    isActive={location === "/stavebni-cinnost"}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Stavební činnost HS
                  </MobileNavLink>
                  <MobileNavLink 
                    href="/kontakt" 
                    isActive={location === "/kontakt"}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kontakt
                  </MobileNavLink>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex flex-col space-y-4">
                    <a href="tel:+420608187355" className="flex items-center text-gray-300 hover:text-primary transition-colors duration-300">
                      <Phone className="h-4 w-4 mr-3" />
                      +420 608 187 355
                    </a>
                    <a href="mailto:Info@hsstavbygroup.cz" className="flex items-center text-gray-300 hover:text-primary transition-colors duration-300">
                      <Mail className="h-4 w-4 mr-3" />
                      Info@hsstavbygroup.cz
                    </a>
                  </div>
                  
                  <div className="mt-6">
                    <Link 
                      href="/kontakt"
                      className="block w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white text-center py-3 rounded-md font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Domluvit konzultaci
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

// Desktop navigation link component
function NavLink({ 
  href, 
  children, 
  isActive 
}: { 
  href: string; 
  children: React.ReactNode; 
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300
        ${isActive 
          ? "text-white bg-white/10" 
          : "text-gray-300 hover:text-white hover:bg-white/5"
        }
      `}
    >
      {children}
      {isActive && (
        <motion.span
          layoutId="navbar-active-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
}

// Mobile navigation link component
function MobileNavLink({ 
  href, 
  children, 
  isActive,
  onClick
}: { 
  href: string; 
  children: React.ReactNode; 
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center justify-between px-4 py-3 rounded-md transition-all duration-300
        ${isActive 
          ? "text-white bg-white/10" 
          : "text-gray-300 hover:text-white hover:bg-white/5"
        }
      `}
    >
      <span>{children}</span>
      <ChevronRight className="h-4 w-4 text-gray-500" />
    </Link>
  );
}
