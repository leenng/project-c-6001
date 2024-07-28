import React from 'react';
import { Dropdown } from 'antd';
import styled from 'styled-components';

import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
export const items = [
  { key: 'zh', label: '中文' },
  { key: 'en', label: 'English' },
];
const LanguageChange: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Dropdown
        menu={{
          items,
          selectable: true,
          onClick: e => {
            i18n.changeLanguage(e.key);
          },
        }}
      >
        <div className="inline-block bg-white/15">
          <div className="h-[30px] flex items-center pl-3 pr-3 text-white/70">
            {items.map(item => item.key === i18n.language && item.label)}
            <DownOutlined className="text-gray-400/95 text-[12px] ml-1" />
          </div>
        </div>
      </Dropdown>
    </>
  );
};

export { LanguageChange };

const Div = styled.div``;
