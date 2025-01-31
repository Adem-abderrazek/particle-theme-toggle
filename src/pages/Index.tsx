import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ParticleBackground from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-primary/20 backdrop-blur-sm transition-all duration-500">
      <ParticleBackground />
      
      {/* Language and Theme Toggles */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          variant="outline"
          onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
          className="glass-button hover:scale-105 transition-transform duration-300"
        >
          {language === "fr" ? "EN" : "FR"}
        </Button>
        <Button
          variant="outline"
          onClick={() => setIsDark(!isDark)}
          className="glass-button hover:scale-105 transition-transform duration-300"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              {t("hero.title")}
            </h1>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
              {t("hero.subtitle")}
            </p>
            <Button size="lg" className="glass-button animate-float">
              {t("hero.cta")}
            </Button>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg transform rotate-6 group-hover:rotate-3 transition-transform duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
              alt="Modern construction project"
              className="rounded-lg object-cover w-full h-[400px] shadow-2xl transform group-hover:scale-105 transition-all duration-300"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 glass-card rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm text-white">Modern construction project showcasing innovative design and sustainable materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {t("process.title")}
          </h2>
          <div className="space-y-24">
            {[1, 2, 3, 4, 5].map((step, index) => (
              <div 
                key={step} 
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`space-y-4 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                      0{step}
                    </span>
                    <h4 className="text-xl font-semibold">{t(`process.step${step}.title`)}</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{t(`process.step${step}.description`)}</p>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                  <img
                    src={`https://images.unsplash.com/photo-148${6718448742 + step}`}
                    alt={`Process step ${step}`}
                    className="rounded-lg object-cover w-full h-[300px] shadow-xl transform group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 glass-card rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-white">{t(`process.step${step}.imageDescription`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-20 px-4 glass">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            GUIDE PRATIQUE
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
                alt="Construction guide"
                className="rounded-lg object-cover w-full h-[400px] shadow-xl transform group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 glass-card rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-white">Comprehensive guide to understanding load-bearing walls and structural modifications</p>
              </div>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="glass-card">
                <AccordionTrigger className="text-left px-4">
                  Qu'est ce qu'un mur porteur?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  Un mur porteur est un élément essentiel de la structure d'une habitation...
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="glass-card">
                <AccordionTrigger className="px-4">
                  Pourquoi ouvrir un mur porteur chez soi?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  L'ouverture de murs porteurs est une pratique de plus en plus courante...
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="glass-card">
                <AccordionTrigger className="px-4">
                  Comment reconnaître un mur porteur?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  Les murs porteurs sont généralement situés à l'extérieur ou à l'intérieur...
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Quels sont les tarifs pour ouvrir un mur porteur?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Lorsque vous sollicitez ARCIVIL pour une étude structurelle...
            </p>
            <Button size="lg" className="glass-button animate-float">
              {t("hero.cta")}
            </Button>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1433832597046-4f10e10ac764"
              alt="Pricing information"
              className="rounded-lg object-cover w-full h-[400px] shadow-xl transform group-hover:scale-105 transition-all duration-300"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 glass-card rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm text-white">Transparent pricing and detailed cost breakdown for structural modifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 glass">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {t("contact.title")}
          </h2>
          <Button size="lg" variant="outline" className="glass-button animate-float">
            {t("hero.cta")}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;