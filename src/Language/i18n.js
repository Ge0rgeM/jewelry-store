import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      switch_lang: "KA",
      switch_language: "Switch language to Georgian",
      collection: "Collection",
      how_to_order: "How to order",
      contact: "Contact",
      title: "Jewelry you wear every day"
    }
  },
  ka: {
    translation: {
      switch_lang: "EN",
      switch_language: "ენის შეცვლა ინგლისურზე",
      collection: "კოლექცია",
      how_to_order: "როგორ შევუკვეთო",
      contact: "კონტაქტი",
      title: "ბიჟუტერია, რომელსაც ყოველდღე ატარებ",
      description: "საათები, ბეჭდები, საყურეები, ყელსაბამები და სამაჯურები. სამყარო, სადაც თითოეული დეტალი შექმნილია იმისთვის, რომ შენი სტილი უფრო დახვეწილი, გამორჩეული და მომხიბვლელი გახდეს. პატარა დეტალები, რომლებიც შენს სილამაზეს განსაკუთრებულ ელფერს სძენს. შეარჩიე სამკაული, რომელიც შენს ხასიათს გამოხატავს, შენს სილამაზეს უსვამს ხაზს და ყოველდღიურობას განსაკუთრებულს ხდის.",
      copyright: "  Mariam’s shine · მარიამს შაინი. ყველა უფლება დაცულია."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ka", // The default language when the app loads
    fallbackLng: "en", // Fallback language if a translation is missing
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;