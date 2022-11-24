import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  EN: {
    translation: {
      loading: 'loading data...',
      name: 'Name',
      email: 'Email',
      region: 'Region',
      points: 'Points',
      modifyUser: 'MODIFY USER',
      currentIcon: 'Current icon',
      changeIcon: 'Change icon',
      currentUsername: 'Current username',
      changeUsername: 'Change username',
      currentLanguage: 'Current language',
      changeLanguage: 'Change language',
      save: 'Save',
    },
  },
  ES: {
    translation: {
      loading: 'cargando datos...',
      name: 'Nombre',
      email: 'Email',
      region: 'Region',
      points: 'Puntos',
      modifyUser: 'MODIFICAR USUARIO',
      currentIcon: 'Icono actual',
      changeIcon: 'Cambiar icono',
      currentUsername: 'Username actual',
      changeUsername: 'Cambiar username',
      currentLanguage: 'Idioma actual',
      changeLanguage: 'Cambiar idioma',
      save: 'Guardar',
    },
  },
  PT: {
    translation: {
      loading: 'carregando dados...',
      name: 'Nome',
      email: 'Email',
      region: 'Região',
      points: 'Pontos',
      modifyUser: 'MODIFICAR USUARIO',
      currentIcon: 'Icone atual',
      changeIcon: 'Mudar ícone',
      currentUsername: 'Username atual',
      changeUsername: 'Mudar username',
      currentLanguage: 'Idioma atual',
      changeLanguage: 'Mudar idioma',
      save: 'Salve',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ES', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
