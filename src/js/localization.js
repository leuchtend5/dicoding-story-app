import { configureLocalization } from '@lit/localize';
import { sourceLocale, targetLocales } from '../generated/locale-codes';

const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  async loadLocale(locale) {
    return import(`../generated/locales/${locale}.js`);
  },
});

const setLocaleFromUrl = async () => {
  const url = new URL(window.location.href);
  const locale = url.searchParams.get('lang') || sourceLocale;

  console.log('setLocaleFromUrl', locale);
  console.log('getLocale', getLocale());
  await setLocale(locale);
};

const localeNames = {
  en: 'Inggris',
  id: 'Indonesia',
  ch: 'China',
};

export { getLocale, setLocale, setLocaleFromUrl, localeNames };
