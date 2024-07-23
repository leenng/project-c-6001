import { Banner } from './Banner';
import { Header } from 'app/components/Header';
import { LanguageChange } from 'app/components/LanguageChange';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { HomeContent } from './style';

import { useMediaQuery } from 'react-responsive';
import { Footer } from 'app/components/Footer';
import { IndexCardInfo } from 'app/components/IndexCardInfo';
import { IndexAbout } from './indexAbout';
import { useTranslation } from 'react-i18next';
import { messages } from 'locales/message';
import { useLocation } from 'react-router-dom';

export function HomePage() {
  const { t } = useTranslation();
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: '768px' });
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);
  return (
    <HomeContent>
      <Helmet>
        <title>{t(...messages.home())}</title>
      </Helmet>

      {/* <Banner children={<img src={isMobile ? bannerMobile : bannerPc} alt="banner" />} /> */}
      <Banner />
      <div className="w p-[16px] md:py-[90px]">
        <IndexCardInfo />
      </div>
      <IndexAbout />
      {/* <IndexNews /> */}
    </HomeContent>
  );
}
