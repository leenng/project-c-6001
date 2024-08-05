/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConfigProvider } from 'antd';
import { Contact } from './pages/Contact';
import { AboutPage } from './pages/About';
import { messages } from 'locales/message';
import { Detail } from './pages/Detail'
import '../styles/base.css'
function App() {
  const { t,i18n } = useTranslation();
  const pageTile = `%s - ${t(...messages.title())}`;
  const locale = navigator.language.startsWith('zh') ? 'zh' : 'en';
  React.useEffect(() => {
    i18n.changeLanguage(locale);
  } , [])
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2D7DFD',
        },
      }}
    >
      <BrowserRouter>
        <Helmet
          titleTemplate={pageTile}
          // defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta
            name="description"
            content={t(...messages.desc())}
          />
          <meta
            name="keywords"
            content={t(...messages.keywords())}
          />
          <meta
            name="viewport"
            content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"
          />
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export { App };
