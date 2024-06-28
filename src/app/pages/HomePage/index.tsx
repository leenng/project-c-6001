import { Banner } from 'app/components/Banner';
import { Header } from 'app/components/Header';
import { LanguageChange } from 'app/components/LanguageChange';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { HomeContent } from './style';
import bannerPc from 'images/banner-pc.png';
import bannerMobile from 'images/banner-m.png';
import { useMediaQuery } from 'react-responsive';
import { Footer } from 'app/components/Footer';

export function HomePage() {
  const isMobile = useMediaQuery({ maxWidth: '768px' });
  React.useEffect(() => {});
  return (
    <HomeContent>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <Banner children={<img src={isMobile ? bannerMobile : bannerPc} alt="banner" />} />
      <Footer />
    </HomeContent>
  );
}
