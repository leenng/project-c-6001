import React from 'react';
import { Link } from 'react-router-dom';
import about01 from 'images/about-1.png';
import iconChip from 'images/icon-chip.png';
import icon3C from 'images/icon-3c.png';
import iconPrint from 'images/icon-print.png';
import iconService from 'images/icon-service.png';

import { CompanySlider } from 'app/components/CompanySlider';
import { useTranslation } from 'react-i18next';
import { messages } from 'locales/message';

const Part1 = () => {
  const { t } = useTranslation();
  return (
    <div className="w bg-[#EDEDED] lg:bg-[#fff] py-[40px] md:pt-[100px] md:pb-[88px] ">
      <div className="flex text-[#222] px-[16px] ">
        <div className="flex-1 flex flex-col ">
          {/* <p className="text-[18px] mb-[20px] text-center md:text-[24px] md:text-left">
            RAYFIELD ELECTRONIC TECHNICAL SERVICE PTE.LTD.
          </p> */}
          <div
            className="text-[13px]  mb-[25px] md:text-left md:text-[16px]"
            dangerouslySetInnerHTML={{ __html: t(...messages.aboutText()) }}
          ></div>
          <div className="flex gap-[1%] flex-wrap justify-between">
           
              <div className="p-[20px] bg-[#f8f8f8] rounded-md w-[49%] mb-[10px] md:w-[32.333%] ">
              <Link to={`/detail/1`}>
                <img src={iconService} alt="it" className="h-[26px] block m-auto mb-[10px] md:h-[32px]" />
                <p className="text-xs text-center md:text-[14px]">{t(...messages.aboutIconTitle1())}</p>
              </Link>
               
              </div>
           
           
            <div className="p-[20px] bg-[#f8f8f8] rounded-md w-[49%] mb-[10px] md:w-[32.333%] ">
            <Link to={`/detail/2`}>
              <img src={icon3C} alt="it" className="h-[26px] block m-auto mb-[10px]  md:h-[32px]" />
              <p className="text-xs text-center md:text-[14px]">{t(...messages.aboutIconTitle2())}</p>
            </Link>
             
            </div>
           
            <div className="p-[20px] bg-[#f8f8f8] rounded-md w-[49%] mb-[10px] md:w-[32.333%] ">
              <Link to={`/detail/3`}>
                <img src={iconChip} alt="it" className="h-[26px] block m-auto mb-[10px]  md:h-[32px]" />
                <p className="text-xs text-center md:text-[14px]">{t(...messages.aboutIconTitle3())}</p>
              </Link>
            </div>
            <div className="p-[20px] bg-[#f8f8f8] rounded-md w-[49%] mb-[10px] md:mb-[0px]  ">
              <Link to={`/detail/4`}>
                <img src={iconPrint} alt="it" className="h-[26px] block m-auto mb-[10px] md:h-[32px]" />
                <p className="text-xs text-center md:text-[14px]">{t(...messages.aboutIconTitle5())}</p>
              </Link>
            </div>
            
          </div>
        </div>
        <div className="hidden ml-[110px] lg:block">
          <img src={about01} alt="about01" className="w-[454px]" />
        </div>
      </div>
      <div className="mt-[16px] px-[0px] md:px-[16px] md:mt-[80px] ">
        <CompanySlider style={{ border: '1px solid rgba(0, 0, 0, .08)' }} />
      </div>
    </div>
  );
};

export { Part1 };
