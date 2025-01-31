import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    'hero.title': 'Transform Your Space with Confidence',
    'hero.subtitle': 'Expert structural analysis for your renovation projects',
    'hero.cta': 'Get Started',
    'process.title': 'Our Process',
    'process.step1.title': 'Initial Consultation',
    'process.step1.description': 'We discuss your project and requirements',
    'process.step1.imageDescription': 'Initial consultation with our experts',
    'process.step2.title': 'Site Analysis',
    'process.step2.description': 'Thorough examination of the structure',
    'process.step2.imageDescription': 'Detailed site analysis in progress',
    'process.step3.title': 'Design Phase',
    'process.step3.description': 'Creating detailed structural plans',
    'process.step3.imageDescription': 'Design and planning phase',
    'process.step4.title': 'Validation',
    'process.step4.description': 'Final checks and approvals',
    'process.step4.imageDescription': 'Project validation process',
    'process.step5.title': 'Execution',
    'process.step5.description': 'Implementation of approved plans',
    'process.step5.imageDescription': 'Project execution phase',
    'contact.title': 'Ready to Start Your Project?'
  },
  fr: {
    'hero.title': 'Transformez Votre Espace en Toute Confiance',
    'hero.subtitle': 'Analyse structurelle experte pour vos projets de rénovation',
    'hero.cta': 'Commencer',
    'process.title': 'Notre Processus',
    'process.step1.title': 'Consultation Initiale',
    'process.step1.description': 'Nous discutons de votre projet et de vos besoins',
    'process.step1.imageDescription': 'Consultation initiale avec nos experts',
    'process.step2.title': 'Analyse du Site',
    'process.step2.description': 'Examen approfondi de la structure',
    'process.step2.imageDescription': 'Analyse détaillée du site en cours',
    'process.step3.title': 'Phase de Conception',
    'process.step3.description': 'Création de plans structurels détaillés',
    'process.step3.imageDescription': 'Phase de conception et de planification',
    'process.step4.title': 'Validation',
    'process.step4.description': 'Vérifications finales et approbations',
    'process.step4.imageDescription': 'Processus de validation du projet',
    'process.step5.title': 'Exécution',
    'process.step5.description': 'Mise en œuvre des plans approuvés',
    'process.step5.imageDescription': 'Phase d\'exécution du projet',
    'contact.title': 'Prêt à Démarrer Votre Projet ?'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};