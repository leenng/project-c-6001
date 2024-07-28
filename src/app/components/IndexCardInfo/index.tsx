import React from 'react';

import iconChip from 'images/icon-chip.png';
import icon3C from 'images/icon-3c.png';
import iconPrint from 'images/icon-print.png';
import iconService from 'images/icon-service.png';
import { messages } from 'locales/message';
import { useTranslation } from 'react-i18next';

const IndexCardInfo = () => {
  const { t, i18n } = useTranslation();
  const list = [
    {
      key: '1',
      imUrl: iconService,
      title: t(...messages.indexServiceTitle1()),
      desc: t(...messages.indexServiceText1()),
    },
    {
      key: '2',
      imUrl: icon3C,
      title: t(...messages.indexServiceTitle2()),
      desc: t(...messages.indexServiceText2()),
    },
    {
      key: '3',
      imUrl: iconChip,
      title: t(...messages.indexServiceTitle3()),
      desc: t(...messages.indexServiceText3()),
    },
    {
      key: '4',
      imUrl: iconPrint,
      title: t(...messages.indexServiceTitle4()),
      desc: t(...messages.indexServiceText4()),
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] ">
      {list.map(item => (
        <div
          key={item.key}
          className=" text-[#222] text-center rounded-lg shadow-md bg-[#f1f1f1] p-[15px] md:px-[27px] md:py-[50px]"
        >
          <img className="h-[39px] mb-[10px] block m-auto md:h-[60px] md:mb-[25px]" src={item.imUrl} alt="img" />
          <p className="text-[15px] font-bold mb-[17px] md:text-[18px] md:mb-[27px] ">{item.title}</p>
          <p className=" text-[12px] opacity-[0.6] md:text-[14px]">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export { IndexCardInfo };
