// Centralized i18n utilities
export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.team': 'Équipe',
    'nav.contact': 'Contact',
  },
} as const;

export type UiType = typeof ui;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof UiType) {
  return function t(key: keyof UiType[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

