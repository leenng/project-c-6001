import React from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from 'locales/message';
import im01 from 'images/index-new-1.png';
import im02 from 'images/index-new-2.png';
import im03 from 'images/index-new-3.png';
import styled from 'styled-components';

const list = [
  {
    key: '1',
    imUrl: im01,
    title: 'Photographic photos of test images in PCB circuit board manufacturing',
    desc: 'The deepening of curriculum reform work is related to the cultivation of high-quality talents. This article focuses on the Product ...',
    date: '2024-06-01',
  },
  {
    key: '2',
    imUrl: im02,
    title: 'Photographic photos of test images in PCB circuit board manufacturing',
    desc: 'The deepening of curriculum reform work is related to the cultivation of high-quality talents. This article focuses on the Product ...',
    date: '2024-06-01',
  },
  {
    key: '3',
    imUrl: im03,
    title: 'Photographic photos of test images in PCB circuit board manufacturing',
    desc: 'The deepening of curriculum reform work is related to the cultivation of high-quality talents. This article focuses on the Product ...',
    date: '2024-06-01',
  },
];

const IndexNews = () => {
  const { t } = useTranslation();
  return (
    <Div>
      <div className="w md-px-[10px] py-[45px] px-[16px] md:py-[70px]">
        <div className="flex justify-between items-center mb-[37px] md:mb-[60px]">
          <p className="text-[27px] text-[#222] md:tetx-[36px]">{t(...messages.news())}</p>
          <button className="bg-[#2D7DFD] text-[11px] px-[10px] text-white rounded-md h-[24px] md:bg-white/0 md:text-[#222] md:opacity-[0.5]">
            {t(...messages.viewMore())}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          {list.map(item => (
            <div key={item.key} className="item flex bg-[#f8f8f8] rounded-xl overflow-hidden md:flex-col">
              <div
                className="w-[34.6] flex-1 bg-fixed md:h-[240px] md:w-full bg-slate-300 md:flex-none"
                style={{
                  background: `url(${item.imUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="flex-1 p-[12px]">
                <p className="title leading-normal text-[#222] font-bold mb-[20px] hidden md:block">{item.title}</p>
                <p className="text-[#222] leading-normal text-[13px] mb-[9px] md:text-[14px] md:mb-[20px]">
                  {item.desc}
                </p>
                <p className="text-[11px] text-[#222] opacity-[0.3] md:text-[14px]">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Div>
  );
};

export { IndexNews };

const Div = styled.div`
  .item:hover {
    cursor: pointer;
    .title {
      color: #2d7dfd;
    }
  }
`;
