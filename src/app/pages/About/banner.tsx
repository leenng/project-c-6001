import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Banner as BannerX } from 'app/components/Banner';
import bannerM from 'images/banner-about-m.png';
import BannerPc from 'images/banner-about-pc.png';

const Banner = () => {
  const isMobile = useMediaQuery({ maxWidth: '768px' });
  return <BannerX children={<img src={isMobile ? bannerM : BannerPc} alt="banner" />} />;
};

export { Banner };
