import React from 'react';
import qrcode from 'images/qrcode.png';

const Footer = () => {
  return (
    <div className="bg-[#222] pt-[34px] overflow-hidden ">
      <div className="w pl-[15px] pr-[15px] md:pl-0 md-pr-0">
        <div className="flex justify-between">
          <div className="hidden md:block md:w-full">
            <div className="flex">
              <div className="mr-[100px]">
                <p className="text-[16px] mb-1.5 text-white">About Us</p>
                <p>
                  <a className="text-white/60 ">company1</a>
                </p>
                <p>
                  <a className="text-white/60 ">company1</a>
                </p>
              </div>
              <div className="mr-[100px]">
                <p className="text-[16px] mb-1.5 text-white">About Us</p>
                <p>
                  <a className="text-white/60 ">company1</a>
                </p>
                <p>
                  <a className="text-white/60 ">company1</a>
                </p>
              </div>
              <div>
                <p className="text-[16px] mb-1.5 text-white">Contact Us</p>
                <p>
                  <a className="text-white/60 ">company1</a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex whitespace-nowrap w-full md:w-auto justify-between md:items-end md:flex-col">
            <div className="md:text-end">
              <p className="text-2xl mb-3.5 font-bold text-white md:hidden">Contact Us</p>
              <p className="text-white font-md">Tel: +86 111 2341 5678</p>
              <p className="text-white font-md">Email: mgleme@163.com</p>
            </div>
            <div className="md:mt-3">
              <img src={qrcode} alt="qrcode" className="w-[100px] " />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-white/10 w-full mt-[30px]"></div>
      <div className="w pl-[15px] pr-[15px] md:pl-0 md-pr-0 text-white/40 text-[11px] pt-3 pb-3 md:text-center md:flex md:justify-between">
        <p className="mb-1.5 md:mb-0">
          Copyright &copy; 2024 RAYFIELD ELECTRONIC TECHNICAL SERVICE PTE.LTD. All rights reserved
        </p>
        <p>Yue ICP Bei 2124123456 </p>
      </div>
    </div>
  );
};
export { Footer };
