import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, Phone, Mail, Clock, Facebook, Instagram, 
  Linkedin, Send, AlertCircle, Calendar, User, AtSign
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Jméno musí obsahovat alespoň 2 znaky"),
  email: z.string().email("Zadejte platnou emailovou adresu"),
  phone: z.string().optional(),
  message: z.string().min(10, "Zpráva musí obsahovat alespoň 10 znaků")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { toast } = useToast();

  // Form setup
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  // Mutation for form submission
  const mutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Úspěch!",
        description: "Vaše zpráva byla úspěšně odeslána. Budeme vás kontaktovat co nejdříve.",
        variant: "default",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Chyba!",
        description: `Při odesílání formuláře došlo k chybě: ${error.message}`,
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  // List of contact info items
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Adresa",
      content: "Václavské náměstí 832/19, 110 00 Praha 1",
      link: "https://maps.google.com/?q=Václavské+náměstí+832/19+Praha",
      linkText: "Zobrazit na mapě"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telefon",
      content: "+420 608 187 355",
      link: "tel:+420608187355",
      linkText: "Zavolat"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "Info@hsstavbygroup.cz",
      link: "mailto:Info@hsstavbygroup.cz",
      linkText: "Poslat email"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Otevírací doba",
      content: "Po-Pá: 9:00 - 17:00, Víkendy: po domluvě",
      link: null,
      linkText: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0A0A0A] to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(40,40,40,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(40,40,40,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
      <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-gradient-radial from-red-600/5 to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal direction="down" delay={0.1} className="mb-4">
            <div className="inline-flex items-center text-red-500 text-sm font-medium">
              <span className="inline-block h-px w-5 bg-red-500 mr-2.5"></span>
              <span className="uppercase tracking-wider">KONTAKT</span>
              <span className="inline-block h-px w-5 bg-red-500 ml-2.5"></span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="down" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Kontaktujte <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600">naše odborníky</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="down" delay={0.3}>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Máte zájem o naše služby nebo potřebujete konzultaci? Neváhejte nás kontaktovat. Jsme připraveni vám pomoci s jakýmkoliv dotazem.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Contact form */}
          <ScrollReveal direction="left" delay={0.4} threshold={0.1}>
            <div className="relative rounded-xl overflow-hidden">
              {/* Card backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black -z-10"></div>
              
              {/* Border effect */}
              <div className="absolute inset-px rounded-xl p-[1px] bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black/90 rounded-xl overflow-hidden">
                  {/* Accent decorations */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
                </div>
                
                {/* Form content */}
                <div className="relative p-8">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-8 space-y-6">
                      {/* Name input */}
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-200">
                          Jméno <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <User className="w-5 h-5" />
                          </div>
                          <input 
                            id="name" 
                            {...register("name")}
                            className="w-full pl-10 pr-4 py-3 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-colors" 
                            placeholder="Vaše jméno" 
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-1.5 flex items-center text-sm text-red-500">
                            <AlertCircle className="w-4 h-4 mr-1.5 flex-shrink-0" />
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      
                      {/* Email input */}
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <AtSign className="w-5 h-5" />
                          </div>
                          <input 
                            type="email" 
                            id="email" 
                            {...register("email")}
                            className="w-full pl-10 pr-4 py-3 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-colors" 
                            placeholder="Váš email" 
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1.5 flex items-center text-sm text-red-500">
                            <AlertCircle className="w-4 h-4 mr-1.5 flex-shrink-0" />
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      
                      {/* Phone input */}
                      <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-200">
                          Telefon <span className="text-gray-400 font-normal">(volitelné)</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <Phone className="w-5 h-5" />
                          </div>
                          <input 
                            type="tel" 
                            id="phone" 
                            {...register("phone")}
                            className="w-full pl-10 pr-4 py-3 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-colors" 
                            placeholder="Vaše telefonní číslo" 
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1.5 flex items-center text-sm text-red-500">
                            <AlertCircle className="w-4 h-4 mr-1.5 flex-shrink-0" />
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                      
                      {/* Message textarea */}
                      <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-200">
                          Zpráva <span className="text-red-500">*</span>
                        </label>
                        <textarea 
                          id="message" 
                          rows={5} 
                          {...register("message")}
                          className="w-full p-4 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-colors" 
                          placeholder="Napište nám, jak vám můžeme pomoci..." 
                        />
                        {errors.message && (
                          <p className="mt-1.5 flex items-center text-sm text-red-500">
                            <AlertCircle className="w-4 h-4 mr-1.5 flex-shrink-0" />
                            {errors.message.message}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {/* Submit button */}
                    <button 
                      type="submit" 
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-3.5 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-red-700/20 group"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Odesílání...</span>
                        </>
                      ) : (
                        <>
                          <span>Odeslat zprávu</span>
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Contact information and map */}
          <div className="flex flex-col gap-10">
            {/* Contact cards */}
            <ScrollReveal direction="right" delay={0.4} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="relative p-6 border border-gray-800 bg-gradient-to-b from-gray-900 to-black/90 rounded-xl overflow-hidden group hover:border-red-500/30 transition-colors duration-300"
                >
                  {/* Content */}
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-red-500/10 text-red-500 group-hover:bg-red-500/20 transition-colors duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{item.content}</p>
                      
                      {item.link && (
                        <a 
                          href={item.link} 
                          className="inline-flex items-center text-xs text-red-500 hover:text-red-400 transition-colors"
                        >
                          {item.linkText} →
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                    <div className="absolute -top-px -right-px w-0 h-0 border-t-[50px] border-t-red-500/10 border-l-[50px] border-l-transparent transform rotate-90"></div>
                  </div>
                </div>
              ))}
            </ScrollReveal>
            
            {/* Business hours and booking button */}
            <ScrollReveal direction="right" delay={0.5}>
              <div className="relative rounded-xl overflow-hidden border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black/90 -z-10"></div>
                
                <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-red-500" />
                      Potřebujete konzultaci?
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Zarezervujte si schůzku s našimi odborníky a získejte řešení na míru.
                    </p>
                  </div>
                  
                  <a 
                    href="tel:+420608187355"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-2.5 px-5 rounded-lg font-medium transition-all duration-300 whitespace-nowrap shadow-lg shadow-red-700/20"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    <span>Domluvit schůzku</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Social media */}
            <ScrollReveal direction="right" delay={0.6}>
              <div className="relative p-6 rounded-xl overflow-hidden border border-gray-800 bg-gradient-to-b from-gray-900 to-black/90">
                <h3 className="text-lg font-medium text-white mb-4">Sledujte nás</h3>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 text-gray-300 hover:bg-red-500/20 hover:text-red-500 transition-all duration-300 border border-gray-800 hover:border-red-500/30"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 text-gray-300 hover:bg-red-500/20 hover:text-red-500 transition-all duration-300 border border-gray-800 hover:border-red-500/30"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 text-gray-300 hover:bg-red-500/20 hover:text-red-500 transition-all duration-300 border border-gray-800 hover:border-red-500/30"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
