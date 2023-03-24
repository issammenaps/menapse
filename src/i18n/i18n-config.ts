import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export default i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        backend: {
            loadPath: 'http://127.0.0.1:8000/api/v1/translation/{{lng}}',
        },
        react: {
            useSuspense: false,
        },
    })