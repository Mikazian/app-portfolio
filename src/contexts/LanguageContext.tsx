import { createContext, useContext, useEffect, useState } from 'react';
import type { Locale } from '@app-portfolio/enums';
import { fr } from '../i18n/fr';
import { en } from '../i18n/en';

export type { Locale } from '@app-portfolio/enums';

type Dictionary = Record<string, string>;

const DICTIONARIES: Record<Locale, Dictionary> = { fr, en };

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  translate: (key: string, params?: Record<string, string | number>) => string;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

const STORAGE_KEY = 'lang';

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [locale, setLocale] = useState<Locale>(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'en' || stored === 'fr' ? stored : 'fr';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const translate = (key: string, params?: Record<string, string | number>) => {
    let value = DICTIONARIES[locale][key] ?? DICTIONARIES.fr[key] ?? key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        value = value.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      });
    }
    return value;
  };

  const value: LanguageContextValue = { locale, setLocale, translate };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage doit être utilisé au sein d'un LanguageProvider");
  }
  return context;
};

export default LanguageContext;
