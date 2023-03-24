
import Template from '@/common/layout/template/Template'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "../styles/globals.scss"
import type { AppProps } from 'next/app'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Provider, connect } from "react-redux";
import store from '@/rematch/store/store'
import { appWithTranslation } from 'next-i18next'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import i18nConfig from '@/i18n/i18n-config'

 function App({ Component, pageProps }: AppProps) {

  const [loaded, setLoaded] = useState(false);

  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);


  useEffect(() => {
    i18nConfig.then(() => setLoaded(true));
  }, []);
  if (!loaded) {
    return <div>Loading...</div>;
  }



  return (
    <Provider store={store}>
      <Template>
        <Component {...pageProps} />
      </Template>
    </Provider>
  )


}

 

export default App