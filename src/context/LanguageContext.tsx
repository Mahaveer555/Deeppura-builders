import React, { createContext, useContext } from 'react';

export type Language = 'en';

interface LanguageContextType {
  language: 'en';
  setLanguage: (lang: 'en') => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LanguageContext.Provider value={{ language: 'en', setLanguage: () => {}, toggleLanguage: () => {} }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  return useContext(LanguageContext);
};
