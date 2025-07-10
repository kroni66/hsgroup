import { Send, ChevronRight, ExternalLink, ArrowUp } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";

export function Footer() {
  const [location] = useLocation();
  const isHomePage = location === "/";
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll position for scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handler for smooth scroll to sections (only on home page)
  const handleScrollTo = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Handler for scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Footer navigation items
  const mainServices = [
    { name: "Správa účetnictví HS", link: "/sprava-ucetnictvi", section: "accounting" },
    { name: "Daňové poradenství HS", link: "/danove-poradenstvi", section: "tax" },
    { name: "Likvidace firem HS", link: "/likvidace-firem", section: "liquidation" },
    { name: "Kontakt", link: "/kontakt", section: "contact" }
  ];

  const additionalServices = [
    { name: "Realitní agentura HS", link: "/realitni-agentura", section: "realestate" },
    { name: "Stavební činnost HS", link: "/stavebni-cinnost", section: "construction" },
    { name: "O společnosti", link: "/", section: "about" }
  ];

  // Contact info removed as requested
  const contactInfo: { icon: JSX.Element; text: string; link?: string }[] = [];

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
        <div className="absolute -left-40 -top-40 w-80 h-80 bg-gradient-radial from-red-900/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -right-20 bottom-40 w-60 h-60 bg-gradient-radial from-red-900/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      </div>
      
      {/* Main footer content */}
      <div className="relative pt-20 pb-10 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Company info */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center group mb-6">
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
                  <span className="text-2xl font-bold text-white">
                    <span className="text-red-500">HS</span> Group
                  </span>
                  <span className="text-xs text-gray-400 -mt-1">Profesionální služby</span>
                </div>
              </Link>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Poskytujeme profesionální služby v oblasti daňového poradenství, správy účetnictví, likvidace firem, realitní činnosti a stavební činnosti.
              </p>
            </div>
            
            {/* Navigation columns */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-medium text-base mb-5">Naše služby</h4>
              <ul className="space-y-3">
                {mainServices.map((service, i) => (
                  <li key={i}>
                    {isHomePage ? (
                      <button 
                        onClick={() => handleScrollTo(service.section)} 
                        className="text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center group"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 mr-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        {service.name}
                      </button>
                    ) : (
                      <Link 
                        href={service.link} 
                        className="text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center group"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 mr-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        {service.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="text-white font-medium text-base mb-5">Další služby</h4>
              <ul className="space-y-3">
                {additionalServices.map((service, i) => (
                  <li key={i}>
                    {isHomePage ? (
                      <button 
                        onClick={() => handleScrollTo(service.section)} 
                        className="text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center group"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 mr-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        {service.name}
                      </button>
                    ) : (
                      <Link 
                        href={service.link} 
                        className="text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center group"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 mr-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        {service.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter section */}
            <div className="lg:col-span-4">
              <h4 className="text-white font-medium text-base mb-5">Newsletter</h4>
              <p className="text-gray-400 mb-4 text-sm">
                Přihlaste se k odběru newsletteru a získejte nejnovější informace a tipy z oblasti daňových a podnikatelských služeb.
              </p>
              
              <form className="mb-4">
                <div className="relative">
                  <input 
                    type="email" 
                    className="w-full py-3 pl-4 pr-12 bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-colors" 
                    placeholder="Váš email"
                  />
                  <button 
                    type="submit" 
                    className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-red-700 to-red-600 text-white px-3 rounded-md hover:from-red-600 hover:to-red-500 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
              
              <div className="inline-flex items-center text-xs text-gray-500">
                <ExternalLink className="w-3 h-3 mr-1" />
                Odesláním souhlasíte se zpracováním osobních údajů.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright section */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} HS Group. Všechna práva vyhrazena.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/pravni-sluzby" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
              Zásady ochrany osobních údajů
            </Link>
            <Link href="/pravni-sluzby" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
              Podmínky používání
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
              Mapa stránek
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black transition-all z-50 shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
