import { createI18n } from 'vue-i18n';
import { ref } from 'vue';
import pt from './locales/pt.json';
import en from './locales/en.json';

const messages = {
  pt,
  en
};

// Get saved language from localStorage or default to 'pt' (Portuguese is the main language)
// Check if we're in a browser environment
const getSavedLocale = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const saved = localStorage.getItem('locale');
    // Only return if it's a valid locale, otherwise default to 'pt' (Portuguese)
    if (saved === 'pt' || saved === 'en') {
      return saved;
    }
    // If invalid or not set, default to 'pt' (Portuguese) - the main language
    localStorage.setItem('locale', 'pt');
    return 'pt';
  }
  // Default to Portuguese
  return 'pt';
};

// Get the initial locale
const initialLocale = getSavedLocale();

// Create a reactive ref for locale changes
export const localeRef = ref(initialLocale);

const i18n = createI18n({
  locale: initialLocale,
  fallbackLocale: 'pt',
  messages,
  legacy: false,
  globalInjection: true
});

// Ensure locale is synced with localStorage on initialization
// This runs immediately when the module is loaded
if (typeof window !== 'undefined' && window.localStorage) {
  const saved = localStorage.getItem('locale');
  if (saved === 'pt' || saved === 'en') {
    // Set locale immediately - this is critical for proper initialization
    i18n.global.locale.value = saved;
    localeRef.value = saved;
    // Verify it was set correctly
    if (i18n.global.locale.value !== saved) {
      console.error('i18n locale mismatch! Expected:', saved, 'Got:', i18n.global.locale.value);
    }
  }
}

export default i18n;

