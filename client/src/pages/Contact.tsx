import { ServiceLayout } from "@/components/ServiceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactSection } from "@/components/ContactSection";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-12 h-12 text-primary" />,
      title: "Adresa",
      info: "Václavské náměstí 832/19, 110 00 Praha 1"
    },
    {
      icon: <Phone className="w-12 h-12 text-primary" />,
      title: "Telefon",
      info: "+420 222 333 444"
    },
    {
      icon: <Mail className="w-12 h-12 text-primary" />,
      title: "Email",
      info: "info@hs-group.cz"
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Otevírací doba",
      info: "Po - Pá: 9:00 - 17:00"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <ServiceLayout 
        title="Kontaktujte nás" 
        subtitle="Jsme připraveni vám pomoci s vašimi potřebami"
        bgImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
      >
        <div className="grid grid-cols-1 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 font-['Montserrat']">
              Kontaktní informace
            </h2>
            <p className="text-lg mb-6 font-['Open_Sans'] leading-relaxed">
              Máte zájem o naše služby nebo potřebujete více informací? Neváhejte nás kontaktovat. 
              Naši specialisté jsou připraveni zodpovědět vaše dotazy a pomoci vám najít 
              optimální řešení pro vaše potřeby.
            </p>
            <p className="text-lg mb-8 font-['Open_Sans'] leading-relaxed">
              Pro rychlou odpověď můžete využít kontaktní formulář níže, zavolat nám nebo 
              navštívit naši kancelář v centru Prahy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1} distance={20}>
                <div className="bg-[#121212] p-6 rounded-md border border-gray-800 hover:border-primary transition-all duration-300 text-center">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-['Montserrat']">{item.title}</h3>
                  <p className="font-['Open_Sans']">{item.info}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12">
            <ScrollReveal direction="up">
              <div className="bg-[#121212] p-8 rounded-md border border-gray-800 mb-12">
                <h3 className="text-2xl font-bold mb-6 font-['Montserrat']">Kde nás najdete</h3>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.8979945473557!2d14.424604076926936!3d50.08159741429536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94f00f9a19d5%3A0x7f2da1d1a0ac7da!2sV%C3%A1clavsk%C3%A9%20n%C3%A1m.%20832%2F19%2C%20110%2000%20Nov%C3%A9%20M%C4%9Bsto%2C%20Czechia!5e0!3m2!1sen!2sus!4v1711656287584!5m2!1sen!2sus" 
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <ExternalLink className="w-4 h-4 mr-2 text-primary" />
                  <a 
                    href="https://goo.gl/maps/QEKr6PsZH9n8Fgya8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Otevřít v Google Maps
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ContactSection />
        </div>
      </ServiceLayout>
    </div>
  );
}