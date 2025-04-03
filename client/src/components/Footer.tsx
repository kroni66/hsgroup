import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Send } from "lucide-react";

export function Footer() {
  // Handler for smooth scroll to sections
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <svg width="40" height="36" viewBox="0 0 50 45" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M10 5 L20 5 L25 40 L15 40 Z" fill="#ff0000" stroke="#000" strokeWidth="1.5" />
                <path d="M30 5 L40 5 L35 40 L25 40 Z" fill="#ff0000" stroke="#000" strokeWidth="1.5" />
                <circle cx="40" cy="22" r="10" fill="#000" stroke="#ff0000" strokeWidth="1.5" />
                <path d="M36 18 C36 18, 44 18, 44 22 C44 26, 36 26, 36 26" fill="none" stroke="#ff0000" strokeWidth="1.5" />
              </svg>
              <span className="text-2xl font-bold text-white font-['Montserrat']">
                <span className="text-primary">HS</span>-GROUP
              </span>
            </div>
            <p className="font-['Open_Sans'] mb-6">
              Profesionální služby v oblasti realit a investic do nemovitostí s důrazem na kvalitu a spokojenost klientů.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 font-['Montserrat']">Naše služby</h4>
            <ul className="space-y-3 font-['Open_Sans']">
              <li>
                <button 
                  onClick={() => handleScrollTo("services")} 
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Právní služby HS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("accounting")} 
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Správa účetnictví HS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("tax")} 
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Daňové poradenství HS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("liquidation")} 
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Likvidace firem HS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("contact")} 
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 font-['Montserrat']">Další služby</h4>
            <ul className="space-y-3 font-['Open_Sans']">
              <li>
                <button 
                  onClick={() => handleScrollTo("realestate")} 
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Realitní agentura HS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("construction")} 
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Stavební činnost HS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("about")} 
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  O společnosti
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("portfolio")} 
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Portfolio projektů
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("team")} 
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Náš tým
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 font-['Montserrat']">Newsletter</h4>
            <p className="font-['Open_Sans'] mb-4">
              Přihlaste se k odběru našeho newsletteru a získejte nejnovější informace o investičních příležitostech.
            </p>
            <form className="flex">
              <input 
                type="email" 
                className="bg-[#121212] border border-gray-700 p-3 w-full rounded-l-sm text-white focus:border-primary focus:outline-none" 
                placeholder="Váš email"
              />
              <button 
                type="submit" 
                className="bg-primary text-[#0A0A0A] px-4 rounded-r-sm hover:bg-opacity-90 transition-all duration-300"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-['Open_Sans'] mb-4 md:mb-0">&copy; 2024 HS-GROUP. Všechna práva vyhrazena.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-primary transition-colors duration-300">
              Zásady ochrany osobních údajů
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors duration-300">
              Podmínky používání
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
