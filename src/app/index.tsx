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
import { useLocation, useParams } from 'react-router-dom';

function App() {
  const { i18n } = useTranslation();

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
          titleTemplate="%s - 雷菲爾德電子技術服務有限公司 - 电器维修与售后服务整包、定制"
          // defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta
            name="description"
            content="欢迎来到雷菲爾德，我们提供专业的电器维修服务。无论是家用电器还是商用设备，我们都能快速、可靠地解决问题。立即联系我们，让您的设备重获新生！"
          />
          <meta
            name="keywords"
            content="电器维修服务, 售後服務定製, 電器維修, 售後服務定製, 专业修理, 售後服務整包, 可靠性, 家用电器维修, 商用设备修理"
          ></meta>
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
        </Routes>
        <Footer />
        <GlobalStyle />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export { App };
