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
            <div className="text-2xl font-bold text-white mb-6 font-['Montserrat']">
              <span className="text-primary">HS</span>-GROUP
            </div>
            <p className="font-['Open_Sans'] mb-6">
              Profesionální služby v oblasti realit a investic do nemovitostí s důrazem na kvalitu a spokojenost klientů.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 font-['Montserrat']">Rychlé odkazy</h4>
            <ul className="space-y-3 font-['Open_Sans']">
              <li>
                <button 
                  onClick={() => handleScrollTo("hero")} 
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Domů
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("about")} 
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  O nás
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("services")} 
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Služby
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("portfolio")} 
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Portfolio
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
            <h4 className="text-lg font-bold mb-6 font-['Montserrat']">Služby</h4>
            <ul className="space-y-3 font-['Open_Sans']">
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors duration-300">
                  Nákup nemovitostí
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors duration-300">
                  Investiční poradenství
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors duration-300">
                  Správa nemovitostí
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors duration-300">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors duration-300">
                  Financování
                </a>
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
