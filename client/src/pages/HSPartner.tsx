import { motion } from "framer-motion";
import { ServiceLayout } from "../components/ServiceLayout";
import { CheckCircle, Users, Handshake, TrendingUp, Award, Target, ArrowRight, Phone, Mail } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

export default function HSPartner() {
  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "Síť spolehlivých partnerů",
      description: "Připojte se k síti ověřených stavebních společností a rozšiřte své obchodní možnosti."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-red-500" />,
      title: "Zvýšení obratu",
      description: "Získejte přístup k novým projektům a zakázkám prostřednictvím naší rozvinuté sítě."
    },
    {
      icon: <Award className="h-8 w-8 text-red-500" />,
      title: "Certifikace kvality",
      description: "Získejte certifikát HS Partner a zvyšte svou důvěryhodnost na trhu."
    },
    {
      icon: <Target className="h-8 w-8 text-red-500" />,
      title: "Cílené zakázky",
      description: "Dostávejte zakázky přímo odpovídající vašemu zaměření a kapacitám."
    }
  ];

  const requirements = [
    "Platná živnostenská oprávnění pro stavební činnost",
    "Minimálně 3 roky zkušeností ve stavebnictví",
    "Pojištění odpovědnosti za škodu minimálně 5 mil. Kč",
    "Kladné reference od předchozích klientů",
    "Dodržování všech platných norem a předpisů",
    "Ochota ke spolupráci a komunikaci"
  ];

  const process = [
    {
      step: "01",
      title: "Přihláška",
      description: "Vyplňte online přihlášku s informacemi o vaší společnosti a zkušenostech."
    },
    {
      step: "02", 
      title: "Ověření",
      description: "Náš tým ověří vaše reference, certifikace a splnění požadavků."
    },
    {
      step: "03",
      title: "Schválení",
      description: "Po úspěšném ověření obdržíte certifikát HS Partner a přístup do systému."
    },
    {
      step: "04",
      title: "Spolupráce",
      description: "Začněte přijímat zakázky a spolupracovat s ostatními partnery v síti."
    }
  ];

  return (
    <ServiceLayout
      title="HS Partner Program"
      subtitle="Partnerský program pro malé stavební společnosti"
      bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    >
      <div className="space-y-20">
        {/* Program Overview */}
        <ScrollReveal>
          <section className="text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Připojte se k síti <span className="text-red-500">HS Partnerů</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Náš partnerský program je určen pro malé a střední stavební společnosti, 
                které chtějí rozšířit své obchodní možnosti a spolupracovat na větších projektech. 
                Společně dokážeme více než každý sám.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-red-500 mb-2">150+</div>
                  <div className="text-gray-300">Aktivních partnerů</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
                  <div className="text-gray-300">Dokončených projektů</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-red-500 mb-2">98%</div>
                  <div className="text-gray-300">Spokojenost partnerů</div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Benefits Section */}
        <ScrollReveal>
          <section>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Výhody <span className="text-red-500">partnerství</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Jako HS Partner získáte přístup k exkluzivním výhodám a možnostem růstu vašeho podnikání
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Requirements Section */}
        <ScrollReveal>
          <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
                Požadavky pro <span className="text-red-500">vstup</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {requirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{requirement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Process Section */}
        <ScrollReveal>
          <section>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Jak se <span className="text-red-500">připojit</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Čtyři jednoduché kroky k tomu, abyste se stali součástí naší partnerské sítě
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="bg-gradient-to-r from-red-700 to-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ArrowRight className="h-6 w-6 text-red-500 mx-auto" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Application CTA */}
        <ScrollReveal>
          <section className="bg-gradient-to-r from-red-700 to-red-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Připraveni začít <span className="text-red-200">spolupracovat?</span>
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Kontaktujte nás ještě dnes a zjistěte, jak může partnerství s HS Group 
              posunout vaše podnikání na další úroveň.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+420608187355"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-300 flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>+420 608 187 355</span>
              </a>
              
              <a
                href="mailto:Info@hsstavbygroup.cz?subject=HS Partner Program - Zájem o spolupráci"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Info@hsstavbygroup.cz</span>
              </a>
            </div>
            
            <p className="text-red-100 mt-6 text-sm">
              Odpovíme vám do 24 hodin a domluvíme si osobní schůzku
            </p>
          </section>
        </ScrollReveal>

        {/* Partnership Types */}
        <ScrollReveal>
          <section>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Typy <span className="text-red-500">spolupráce</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nabízíme různé formy partnerství přizpůsobené vašim možnostem a cílům
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Handshake className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Subdodavatel</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Specializujte se na konkrétní stavební činnosti a pracujte jako subdodavatel 
                  na našich projektech.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Pravidelné zakázky
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Garantované platby
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Technická podpora
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Konzorcium</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Spojte síly s dalšími partnery a společně realizujte větší projekty 
                  než byste zvládli sami.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Velké projekty
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Sdílení rizik
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Vzájemná podpora
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Přímý partner</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Staňte se plnohodnotným partnerem s možností získávat zakázky 
                  přímo od našich klientů.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Vlastní zakázky
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Marketing podpora
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Brand HS Group
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </ServiceLayout>
  );
}