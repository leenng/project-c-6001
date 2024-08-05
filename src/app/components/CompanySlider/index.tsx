import React from 'react';
import im1 from 'images/c-logo-1.png';
import im2 from 'images/c-logo-2.png';
import im3 from 'images/c-logo-3.png';
import im4 from 'images/c-logo-4.png';
import im5 from 'images/c-logo-5.png';
import { useTranslation } from 'react-i18next';

const list = [
  {
    key: '1',
    imUrl: im1,
    labelEn: 'Sonova',
    labelCn: '索諾瓦音響（北京）有限公司',
  },
  {
    key: '2',
    imUrl: im2,
    labelEn: 'Shanghai Metro',
    labelCn: '上海地鐵運營有限公司',
  },
  {
    key: '3',
    imUrl: im3,
    labelEn: 'Sennheiser',
    labelCn: '森海塞尔電子（北京）有限公司',
  },
  {
    key: '4',
    imUrl: im4,
    labelEn: 'KFC',
    labelCn: '上海肯德基有限公司',
  },
  {
    key: '5',
    imUrl: im5,
    labelEn: 'Lexmark',
    labelCn: '利盟資訊技術（中國）有限公司',
  },
];

interface Props {
  style?: React.CSSProperties;
}
const CompanySlider: React.FC<Props> = ({ style }) => {
  const { i18n } = useTranslation();
  return (
    <div className="w-full overflow-x-auto md:flex md:space-x-[10px]">
      <div className="flex space-x-[10px] md:flex-1 ml-[16px] md:ml-0">
        {list.map(item => (
          <div
            key={item.key}
            style={style}
            className="w-[42.6%] bg-white rounded-lg flex-shrink-0 md:w-[auto] md:flex-1"
          >
           <div className="h-[60px] p-2 flex items-center justify-center shadow-md">
            <img className="max-h-[70%] max-w-[80%]" src={item.imUrl} />
            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
};

export { CompanySlider };
