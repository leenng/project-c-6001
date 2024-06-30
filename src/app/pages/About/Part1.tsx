import React from 'react';
import about01 from 'images/about-1.png';
import iconIt from 'images/icon-it.png';
import iconProduct from 'images/icon-product.png';
import iconFlash from 'images/icon-falsh.png';
import iconSet from 'images/icon-set.png';
import iconService from 'images/icon-service.png';
import { CompanySlider } from 'app/components/CompanySlider';

const Part1 = () => {
  return (
    <div className="w bg-[#EDEDED] lg:bg-[#fff] py-[40px] md:pt-[100px] md:pb-[88px] ">
      <div className="flex text-[#222] px-[16px] ">
        <div className="flex-1 flex flex-col ">
          <p className="text-[18px] mb-[20px] text-center md:text-[24px] md:text-left">
            RAYFIELD ELECTRONIC TECHNICAL SERVICE PTE.LTD.
          </p>
          <p className="text-[13px] text-center mb-[25px] md:text-left md:text-[16px]">
            Shanghai Leiming Electronic Information Development Co., Ltd. is a service company dedicated to providing IT
            and electronic product solutions to various large enterprises and institutions. Established in 2002, the
            company is a professional IT service provider with capabilities in technical development, product
            enhancement, secondary maintenance of electronic circuit products, electrical equipment installation, and
            after-sales service.
          </p>
          <div className="flex gap-[1%] flex-wrap justify-between">
            <div className="p-[20px] bg-[#f8f8f8] rounded-md w-[49%] mb-[10px] md:w-[32.333%] ">
              <img src={iconIt} alt="it" className="h-[26px] block m-auto mb-[10px] md:h-[32px]" />
              <p className="text-xs text-center md:text-[14px]">Technical development</p>
            </div>
            <div className="p-[20px] bg-[#f8f8f8] rounded-md w-[49%] mb-[10px] md:w-[32.333%] ">
              <img src={iconProduct} alt="it" className="h-[26px] block m-auto mb-[10px]  md:h-[32px]" />
              <p className="text-xs text-center md:text-[14px]">Product enhancement</p>
            </div>
            <div className="p-[20px] bg-[#f8f8f8] rounded-md w-[49%] mb-[10px] md:w-[32.333%] ">
              <img src={iconFlash} alt="it" className="h-[26px] block m-auto mb-[10px]  md:h-[32px]" />
              <p className="text-xs text-center md:text-[14px]">electrical equipment installation</p>
            </div>
            <div className="p-[20px] bg-[#f8f8f8] rounded-md w-[49%] mb-[10px] md:mb-[0px]  ">
              <img src={iconSet} alt="it" className="h-[26px] block m-auto mb-[10px] md:h-[32px]" />
              <p className="text-xs text-center md:text-[14px]">Secondary maintenance of electronic circuitproducts</p>
            </div>
            <div className="p-[20px] bg-[#f8f8f8] rounded-md w-[100%] md:w-[49%] ">
              <img src={iconService} alt="it" className="h-[26px] block m-auto mb-[10px]  md:h-[32px]" />
              <p className="text-xs text-center md:text-[14px]">After-sales service</p>
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
