import React from 'react';
import bg from 'images/index-about-bg-pc.png';
import bgm from 'images/index-about-bg-m.png';
import { useTranslation } from 'react-i18next';
import { messages } from 'locales/message';
import { Button } from 'antd';
import { CompanySlider } from 'app/components/CompanySlider';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const IndexAbout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Div className="py-[40px] md:pt-[80px] md:pb-[60px]">
      <div className="w md:px-[10px]">
        <p className="text-center text-[27px] mb-[40px] md:text-[36px] md:mb-[80px]">{t(...messages.about())}</p>
        {/* <p className="text=[15px] text-center leading-snug font-bold mb-[17px] md:text-[20px] md:mb-[24px] ">
          RAYFIELD ELECTRONIC TECHNICAL SERVICE PTE.LTD.
        </p> */}
        <p className="text-[13px] px-2 text-center leading-normal opacity-[0.7] mb-[26px] md:mb-[40px] md:text-[16px] md:max-w-[717px] mx-auto">
          {t(...messages.indexAboutUsText())}
        </p>
        <div className="text-center mb-[50px] md:mb-[62px]">
          <Button type="primary" onClick={() => navigate('/about')}>
            {t(...messages.viewMore())}
          </Button>
        </div>
        <CompanySlider />
      </div>
    </Div>
  );
};

export { IndexAbout };
const Div = styled.div`
  background: url(${bg}) no-repeat center center;
  background-size: cover !important;

  @media screen and (max-width: 768px) {
    background: url(${bgm}) no-repeat center center;
  }
`;
