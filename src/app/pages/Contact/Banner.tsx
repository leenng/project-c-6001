import React from 'react';

import BannerPc from 'images/banner-contact-pc.png';
import bannerMobile from 'images/banner-contact-m.png';
import styled from 'styled-components';

import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { messages } from 'locales/message';

const Banner = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: '768px' });
  return (
    <BannerContent className="w-full animate__animated animate__slow fadeInDownCustom">
      <div className="contents p-[10px] animate__animated animate__slideInUp">{t(...messages.contact())}</div>
    </BannerContent>
  );
};

export { Banner };

const BannerContent = styled.div`
  background: url(${BannerPc}) no-repeat center center;
  background-size: cover;
  height: 560px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .banner-m {
    display: none;
    position: relative;
    z-index: 0;
  }
  .content {
    max-width: 1200px;
    position: relative;
    top: 8%;
    color: #fff;
    font-size: 16px !important;
    margin-bottom: 10px;
    opacity: 0.8;
  }

  .contents {
    max-width: 1200px;
    position: relative;
    top: 8%;
    color: #fff;
    font-weight: bold;
    font-size: 35px !important;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    background: url(${bannerMobile}) no-repeat center center;
    background-size: cover;
    height: auto;
    padding: 30% 0;
    .content {
      font-size: 24px;
    }
  }
`;
