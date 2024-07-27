import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import styled from 'styled-components';
// import { ContextApp } from 'app/index';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoCloseCircleOutline } from 'react-icons/io5';

import { useMediaQuery } from 'react-responsive';
import { RiMenu3Line } from 'react-icons/ri';

import { messages } from 'locales/message';
import { useTranslation } from 'react-i18next';
import { items as languageType } from '../LanguageChange/index';

const Nav = () => {
  const { t, i18n } = useTranslation();
  const nav = [
    {
      router: '/',
      label: t(...messages.home()),
    },
    {
      router: '/about',
      label: t(...messages.about()),
    },
    {
      router: '/contact',
      label: t(...messages.contact()),
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('/');

  const cutString = str => {
    const firstSlashIndex = str.indexOf('/');
    if (firstSlashIndex === -1) {
      return str; // 没有斜杠，返回原字符串
    }
    const secondSlashIndex = str.indexOf('/', firstSlashIndex + 1);
    if (secondSlashIndex === -1) {
      return str; // 只有一个斜杠，返回原字符串
    }
    return str.substring(0, secondSlashIndex);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setActive('/');
    } else {
      setActive(cutString(location.pathname));
    }
  }, [location]);

  const navHandelClick = (item: { router: string }) => {
    setActive(item.router);
    navigate(item.router);
    setOpen(false);
  };

  const navDom = () => (
    <Div>
      {nav.map(item => (
        <a
          onClick={() => navHandelClick(item)}
          key={item.label}
          className={`fontf block text-base ${active === item.router ? 'actived main-color' : ''}`}
        >
          {item.label}
        </a>
      ))}
    </Div>
  );

  const renderDom = () => {
    return isMobile ? (
      <>
        <RiMenu3Line
          color={'#ccc'}
          size={24}
          onClick={() => {
            setOpen(true);
          }}
        />
        <Drawer
          style={{ background: '#f8f8f8' }}
          open={open}
          width={260}
          closeIcon={false}
          onClose={() => setOpen(false)}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end mb-8">
              <IoCloseCircleOutline size={30} color="rgba(0, 0, 0, 0.68)" onClick={() => setOpen(false)} />
            </div>
            <div className="flex-1">{navDom()}</div>
            <div className="flex mb-6">
              {languageType.map((item, index) => {
                return (
                  <>
                    <button
                      className={` ${
                        i18n.language === item.key ? 'text-[#2D7DFD]' : 'text-black/70'
                      } border-0 bg-black/0 text-[15px]`}
                      key={item.key}
                      onClick={() => {
                        i18n.changeLanguage(item.key);
                        setOpen(false);
                      }}
                    >
                      {item.label}
                    </button>
                    {index === 0 && <span className="text-black/20 pl-[20px] pr-[20px]">|</span>}
                  </>
                );
              })}
            </div>
          </div>
        </Drawer>
      </>
    ) : (
      navDom()
    );
  };

  return <>{renderDom()}</>;
};

export { Nav };

const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  a {
    color: #fff;
    border: none;
    background-color: none;
    margin-right: 30px;
    cursor: pointer;
    &.actived {
      font-weight: bold;
      color: #2d7dfd;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    a {
      margin-bottom: 1rem;
      margin-right: 0;
      color: #000;
      &::after {
        content: '';
        display: block;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.1);
        margin-top: 20px;
      }
    }
  }
`;
