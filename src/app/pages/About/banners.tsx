import React from 'react';

import bannerMobile from 'images/banner-about-m.png';
import BannerPc from 'images/banner-about-pc.png';
import styled from 'styled-components';

import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { messages } from 'locales/message';

const Banner = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: '768px' });
  return (
    <BannerContent className="w-full">
      <div
        className="content p-[10px] animate__animated animate__slideInUp"
        dangerouslySetInnerHTML={{ __html: t(...messages.about()) }}
      ></div>
    </BannerContent>
  );
};

export { Banner };

const BannerContent = styled.div`
  background: url(${BannerPc}) no-repeat center center;
  background-size: cover;
  height: 340px;
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
    position: relative;
    top: 8%;
    color: #fff;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    background: url(${bannerMobile}) no-repeat center center;
    background-size: cover;
    height: auto;
    padding: 30% 0;
    .p1 {
      font-size: 34px;
    }
    .p2 {
      font-size: 22px;
    }
    .p3 {
      font-size: 13px;
    }
  }
`;
