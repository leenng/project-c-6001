import React from 'react';
import { Banner } from './Banner';
import { useMediaQuery } from 'react-responsive';

import qrcode from 'images/contact-qrcode.png';
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { FaPaperPlane } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { messages } from 'locales/message';
import { useLocation } from 'react-router-dom';
const Contact: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: '768px' });
  const { t } = useTranslation();
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [location]);
  return (
    <div className="bg-[#f8f8f8]">
      <Helmet>
        <title>{t(...messages.contact())}</title>
      </Helmet>
      <Banner />
      {/* <div className="px-[16px] py-[50px] bg-[#EDEDED] md:hidden">
        <p className="text-[28px] font-bold mb-[14px] leading-normal">Contact Us</p>
        <p className="text-[18px] font-bold text-[#2D7DFD] mb-[24px]">
          After sales maintenance of individual user products
        </p>
        <div>
          <img src={qrcode} alt="qrcode" className="w-[152px]" />
        </div>
      </div> */}
      <div className="w py-[45px] px-[16px] md:py-[95px]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[16px] ">
          <div className="px-[25px] py-[30px] bg-white rounded-md shadow-md lg:col-span-2">
            <p className="flex items-center ">
              <FaLocationDot className="mr-[10px] text-[20px]" />
              <span className="text-[18px] text-[#222]">{t(...messages.contactCompanyAddressTitle())}</span>
            </p>
            <div className="h-[1px] bg-black/10 mt-[14px] mb-[20px]"></div>
            <div className=" leading-8">
              <p className="text-[12px] text-[#222] text-opacity-[0.7] md:text-[15px]">
                {t(...messages.citySingapore())}: {t(...messages.contactCompanyAddressSingapore())}
              </p>
              <p className="text-[12px] text-[#222] text-opacity-[0.7] md:text-[15px]">
                {t(...messages.cityBeijing())}: {t(...messages.contactCompanyAddressBeijing())}
              </p>
              <p className="text-[12px] text-[#222] text-opacity-[0.7] md:text-[15px]">
                {t(...messages.cityShanghai())}: {t(...messages.contactCompanyAddressShanghai())}
              </p>
            </div>
          </div>
          <div className="px-[25px] py-[30px] bg-white rounded-md shadow-md ">
            <p className="flex items-center ">
              <IoIosMail className="mr-[10px] text-[22px]" />
              <span className="text-[18px] text-[#222]">E-mail</span>
            </p>
            <div className="h-[1px] bg-black/10 mt-[14px] mb-[20px]"></div>
            {/* <p className="text-[13px] font-bold mb-[10px] md:text-[15px]">General</p> */}
            <div className="leading-8">
              <p className="text-[14px] text-[#222] text-opacity-[0.7] md:text-[15px]">
                {t(...messages.codeSingapore())}:{' '}
                <a className="text-blue-600" href="mailto:service@sg-rayfield.com">
                  service@sg-rayfield.com
                </a>
              </p>
              <p className="text-[14px] text-[#222] text-opacity-[0.7] md:text-[15px]">
                {t(...messages.codeChina())}:{' '}
                <a className="text-blue-600" href="mailto: service@sh-leike.com">
                  service@sh-leike.com
                </a>
              </p>
            </div>
          </div>
          {/* <div className="px-[25px] py-[30px] bg-white rounded-md shadow-md ">
            <p className="flex items-center ">
              <BsFillTelephoneFill className="mr-[10px]" />
              <span className="text-[18px] text-[#222]">Phone number</span>
            </p>
            <div className="h-[1px] bg-black/10 mt-[14px] mb-[20px]"></div>
            <p className="text-[13px] font-bold mb-[10px] md:text-[15px]">General</p>
            <p className="text-[11px] text-[#222] text-opacity-[0.7] md:text-[15px]">
              Building A4, Room 1026, No. 246 Xilin Street, Zhujing Town, Jinshan District, Shanghai
            </p>
          </div> */}

          {/* <div className="px-[25px] py-[30px] bg-white rounded-md shadow-md ">
            <p className="flex items-center ">
              <FaPaperPlane className="mr-[10px]" />
              <span className="text-[18px] text-[#222]">Follow us</span>
            </p>
            <div className="h-[1px] bg-black/10 mt-[14px] mb-[20px]"></div>

            <p className="text-[11px] text-[#222] text-opacity-[0.7] md:text-[15px]">X</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export { Contact };
