import React from 'react';
import { useTranslation } from 'react-i18next';
import iconChip from 'images/icon-chip.png';
import icon3C from 'images/icon-3c.png';
import iconPrint from 'images/icon-print.png';
import iconService from 'images/icon-service.png';

const list = [
  {
    key: '1',
    imUrl: iconChip,
    title: 'Electrical chip level maintenance',
    desc: 'Chip level maintenance is a type of technical service that requires a particularly high level of expertise, such as the replacement of various working circuits on the motherboard of computers we use in our daily lives, control circuits on hard drives',
  },
  {
    key: '2',
    imUrl: icon3C,
    title: '3C product testing and refurbishment',
    desc: 'The Importance of Third Party Testing CCC Testing Report - CCC Certification Agency - As a pass for products to enter, CCC certification is a mandatory certification, and all products within the scope of CCC certification directory need to be processed. import safety and quality certification',
  },
  {
    key: '3',
    imUrl: iconChip,
    title: 'Printing and copier maintenance',
    desc: 'Printer maintenance | Copier maintenance | Office equipment maintenance [6 pictures] Business services - Office equipment maintenance - Olympic Park 20 hour printer toner, copier printer maintenance, copier printer rental',
  },
  {
    key: '4',
    imUrl: iconService,
    title: 'Online and telephone customer service',
    desc: 'The customer service system can access customer inquiries through all channels, meet customer usage habits, respond to customer needs in a timely manner, and have customer service robots to assist in reducing customer service workload',
  },
];

const IndexCardInfo = () => {
  const { t, i18n } = useTranslation();

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
