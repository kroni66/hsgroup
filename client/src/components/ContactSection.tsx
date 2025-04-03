import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Jméno musí obsahovat alespoň 2 znaky"),
  email: z.string().email("Zadejte platnou emailovou adresu"),
  phone: z.string().optional(),
  message: z.string().min(10, "Zpráva musí obsahovat alespoň 10 znaků")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat']">
            <span className="text-primary">Kontaktujte</span> nás
          </h2>
          <p className="text-lg max-w-3xl mx-auto font-['Open_Sans']">
            Máte zájem o naše služby nebo chcete zjistit více o investičních příležitostech? Neváhejte nás kontaktovat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={formRef}
            variants={containerVariants}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
          >
            <form 
              className="bg-[#0A0A0A] p-8 rounded-md" 
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-semibold">Jméno</label>
                <input 
                  id="name" 
                  {...register("name")}
                  className="w-full bg-[#121212] border border-gray-700 p-3 rounded-sm text-white focus:border-primary focus:outline-none" 
                  placeholder="Zadejte vaše jméno" 
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  {...register("email")}
                  className="w-full bg-[#121212] border border-gray-700 p-3 rounded-sm text-white focus:border-primary focus:outline-none" 
                  placeholder="Zadejte váš email" 
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 font-semibold">Telefon</label>
                <input 
                  type="tel" 
                  id="phone" 
                  {...register("phone")}
                  className="w-full bg-[#121212] border border-gray-700 p-3 rounded-sm text-white focus:border-primary focus:outline-none" 
                  placeholder="Zadejte vaše telefonní číslo" 
                />
                {errors.phone && (
                  <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-semibold">Zpráva</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  {...register("message")}
                  className="w-full bg-[#121212] border border-gray-700 p-3 rounded-sm text-white focus:border-primary focus:outline-none" 
                  placeholder="Napište nám vaši zprávu" 
                />
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary text-[#0A0A0A] py-3 px-8 rounded-sm font-semibold hover:bg-opacity-90 transition-all duration-300 flex justify-center items-center"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Odesílání..." : "Odeslat zprávu"}
              </button>
            </form>
          </motion.div>

          <motion.div
            ref={infoRef}
            variants={containerVariants}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 font-['Montserrat']">Kontaktní informace</h3>
                
                <div className="mb-8">
                  <div className="flex items-start mb-4">
                    <div className="text-primary text-xl mr-4 pt-1">
                      <MapPin />
                    </div>
                    <div>
                      <p className="font-bold mb-1">Adresa</p>
                      <p>Václavské náměstí 832/19<br />110 00 Praha 1</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <div className="text-primary text-xl mr-4 pt-1">
                      <Phone />
                    </div>
                    <div>
                      <p className="font-bold mb-1">Telefon</p>
                      <p>+420 123 456 789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <div className="text-primary text-xl mr-4 pt-1">
                      <Mail />
                    </div>
                    <div>
                      <p className="font-bold mb-1">Email</p>
                      <p>info@hs-group.cz</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 font-['Montserrat']">Sledujte nás</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-[#0A0A0A] rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-[#0A0A0A] transition-all duration-300">
                      <Facebook />
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#0A0A0A] rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-[#0A0A0A] transition-all duration-300">
                      <Instagram />
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#0A0A0A] rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-[#0A0A0A] transition-all duration-300">
                      <Linkedin />
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#0A0A0A] rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-[#0A0A0A] transition-all duration-300">
                      <Twitter />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0A0A0A] p-6 rounded-md border-l-4 border-primary">
                <p className="text-xl font-semibold mb-2 font-['Montserrat']">Otevírací doba</p>
                <div className="flex justify-between mb-2">
                  <span>Pondělí - Pátek</span>
                  <span>9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Víkendy</span>
                  <span>Pouze po domluvě</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
