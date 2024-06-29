import React from 'react';
import im from 'images/icon-service.png';

const list = [
  {
    key: '1',
    imUrl: im,
    label: 'Sonova Audio (Beijing) Co., Ltd.',
  },
  {
    key: '2',
    imUrl: im,
    label: 'Sennheiser Electronics (Beijing) Co., Ltd ',
  },
  {
    key: '3',
    imUrl: im,
    label: 'Shanghai Metro Operation Co., Ltd. ',
  },
  {
    key: '4',
    imUrl: im,
    label: 'Shanghai KFC Co., Ltd. ',
  },
  {
    key: '5',
    imUrl: im,
    label: 'Hangxin Deli Information System (Shanghai) Co., Ltd.',
  },
];

const CompanySlider = () => {
  return (
    <div className="w-full overflow-x-auto md:flex md:space-x-[10px]">
      <div className="flex space-x-[10px] md:flex-1 ml-[16px] md:ml-0">
        {list.map(item => (
          <div key={item.key} className="w-[42.6%] bg-white rounded-lg flex-shrink-0 md:w-[auto] md:flex-1">
            <div className="h-[40px] flex items-center justify-center border-b-[1px] border-black/10 md:h-[56px] ">
              <img className="max-h-[60%] max-w-[80%] border-b " src={item.imUrl} />
            </div>
            <div className="py-[7px] flex items-center justify-items-center justify-center md:py-[12px]">
              <p className="leading-normal px-[15px] text-center text-[#222] opacity-[0.7] text-[11px] md:text-[14px] ">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { CompanySlider };
