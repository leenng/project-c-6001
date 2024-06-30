import React from 'react';
import { Banner } from 'app/components/Banner';
import { useMediaQuery } from 'react-responsive';
import banner from 'images/banner-contact-pc.png';
import bannerM from 'images/banner-contact-m.png';
import qrcode from 'images/contact-qrcode.png';
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { FaPaperPlane } from 'react-icons/fa';

const Contact: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: '768px' });
  return (
    <div className="bg-[#f8f8f8]">
      <Banner children={<img src={isMobile ? bannerM : banner} alt="banner" />} />
      <div className="px-[16px] py-[50px] bg-[#EDEDED] md:hidden">
        <p className="text-[28px] font-bold mb-[14px] leading-normal">Contact Us</p>
        <p className="text-[18px] font-bold text-[#2D7DFD] mb-[24px]">
          After sales maintenance of individual user products
        </p>
        <div>
          <img src={qrcode} alt="qrcode" className="w-[152px]" />
        </div>
      </div>
      <div className="w py-[45px] px-[16px] md:py-[95px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] ">
          <div className="px-[25px] py-[30px] bg-white rounded-md shadow-md ">
            <p className="flex items-center ">
              <FaLocationDot className="mr-[10px]" />
              <span className="text-[18px] text-[#222]">Office address</span>
            </p>
            <div className="h-[1px] bg-black/10 mt-[14px] mb-[20px]"></div>
            <p className="text-[11px] text-[#222] text-opacity-[0.7] md:text-[15px]">
              Building A4, Room 1026, No. 246 Xilin Street, Zhujing Town, Jinshan District, Shanghai
            </p>
          </div>
          <div className="px-[25px] py-[30px] bg-white rounded-md shadow-md ">
            <p className="flex items-center ">
              <BsFillTelephoneFill className="mr-[10px]" />
              <span className="text-[18px] text-[#222]">Phone number</span>
            </p>
            <div className="h-[1px] bg-black/10 mt-[14px] mb-[20px]"></div>
            <p className="text-[13px] font-bold mb-[10px] md:text-[15px]">General</p>
            <p className="text-[11px] text-[#222] text-opacity-[0.7] md:text-[15px]">
              Building A4, Room 1026, No. 246 Xilin Street, Zhujing Town, Jinshan District, Shanghai
            </p>
          </div>
          <div className="px-[25px] py-[30px] bg-white rounded-md shadow-md ">
            <p className="flex items-center ">
              <IoIosMail className="mr-[10px]" />
              <span className="text-[18px] text-[#222]">E-mail</span>
            </p>
            <div className="h-[1px] bg-black/10 mt-[14px] mb-[20px]"></div>
            <p className="text-[13px] font-bold mb-[10px] md:text-[15px]">General</p>
            <p className="text-[11px] text-[#222] text-opacity-[0.7] md:text-[15px]">ddwedewfew@gmail.com</p>
          </div>
          <div className="px-[25px] py-[30px] bg-white rounded-md shadow-md ">
            <p className="flex items-center ">
              <FaPaperPlane className="mr-[10px]" />
              <span className="text-[18px] text-[#222]">Follow us</span>
            </p>
            <div className="h-[1px] bg-black/10 mt-[14px] mb-[20px]"></div>

            <p className="text-[11px] text-[#222] text-opacity-[0.7] md:text-[15px]">X</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Contact };
