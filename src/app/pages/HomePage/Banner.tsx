import React from 'react';

import bannerPc from 'images/banner-pc.png';
import bannerMobile from 'images/banner-m.png';
import styled from 'styled-components';

import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { messages } from 'locales/message';

const Banner = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: '768px' });
  return (
    <BannerContent className="w-full animate__animated animate__slow fadeInDownCustom">
      <div
        className="content p-[1px] animate__animated animate__slideInUp"
        dangerouslySetInnerHTML={{ __html: t(...messages.indexBannerText1()) }}
      ></div>
    </BannerContent>
  );
};

export { Banner };

const BannerContent = styled.div`
  background: url(${bannerPc}) no-repeat center center;
  background-size: cover;
  height: 640px;
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
  .p1 {
    color: #2d7dfd;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 10px;
  }
  .p2 {
    color: #fff;
    font-size: 36px;
    margin-bottom: 20px;
  }
  .p3 {
    color: #fff;
    opacity: 0.6;
    font-size: 14px;
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
