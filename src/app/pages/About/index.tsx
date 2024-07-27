import React from 'react';
import { Banner } from './Banner';
import { Part1 } from './Part1';
import { Part2 } from './part2';
import { Part3 } from './part3';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { messages } from 'locales/message';
import { useLocation } from 'react-router-dom';

const AboutPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);
  return (
    <div className="animate__animated animate__slow fadeInDownCustom">
      <Helmet>
        <title>{t(...messages.about())}</title>
      </Helmet>
      <Banner />
      <Part1 />
      <Part2 />
      {/* <Part3 /> */}
    </div>
  );
};

export { AboutPage };
