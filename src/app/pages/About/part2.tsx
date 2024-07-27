import React from 'react';
import styled from 'styled-components';
import arrow from 'images/arrow.png';
import { useTranslation } from 'react-i18next';
import { messages } from 'locales/message';

const Part2 = () => {
  const { t } = useTranslation();
  const list = [
    {
      key: '1',
      title: t(...messages.aboutWorkFolwTitle1()),
      desc: [t(...messages.aboutWorkFolwText1())],
    },
    {
      key: '2',
      title: t(...messages.aboutWorkFolwTitle2()),
      desc: [t(...messages.aboutWorkFolwText2())],
    },
    {
      key: '3',
      title: t(...messages.aboutWorkFolwTitle3()),
      desc: [t(...messages.aboutWorkFolwText3())],
    },
    {
      key: '4',
      title: t(...messages.aboutWorkFolwTitle4()),
      desc: [t(...messages.aboutWorkFolwText4())],
    },
    {
      key: '5',
      title: t(...messages.aboutWorkFolwTitle5()),
      desc: [t(...messages.aboutWorkFolwText5())],
    },
  ];
  return (
    <Div className="py-[40px] lg:py-[70px]">
      <p className="text-center text-[24px] mb-[28px] md:mb-[50px]">{t(...messages.aboutWorkFolwH1Title())}</p>
      <div className="w px-[16px]">
        <div className="step">
          <div className="item">
            <div className="num">1</div>
            <p>{t(...messages.aboutWorkFolwTitle1())}</p>
          </div>
          <div className="item">
            <div className="num">2</div>
            <p>{t(...messages.aboutWorkFolwTitle2())}</p>
          </div>
          <div className="item">
            <div className="num">3</div>
            <p>{t(...messages.aboutWorkFolwTitle3())}</p>
          </div>
          <div className="item">
            <div className="num">4</div>
            <p>{t(...messages.aboutWorkFolwTitle4())}</p>
          </div>
          <div className="item">
            <div className="num">5</div>
            <p>{t(...messages.aboutWorkFolwTitle5())}</p>
          </div>
        </div>
        <div className="list grid gap-[15px] grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {list.map(item => (
            <div key={item.key} className="bg-white px-[10px] py-[20px] rounded-md">
              <p className="flex items-center mb-[21px] lg:hidden">
                <span className="num mr-[8px]">{item.key}</span> {item.title}
              </p>
              <div className="desc pl-[56px] lg:pl-[36px]">
                {item.desc.map(desc => (
                  <p key={desc}>{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Div>
  );
};

export { Part2 };

const Div = styled.div`
  background-color: #f8f8f8;
  .step {
    margin-bottom: 14px;
    display: flex;
    position: relative;
    font-weight: bold;
    &::before {
      width: 100%;
      height: 1px;
      background: rgba(0, 0, 0, 0.08);
      position: absolute;
      left: 0;
      top: 25px;
      z-index: 0;
      content: '';
    }
    .item {
      position: relative;
      flex: 1;
      text-align: center;
      &::after {
        content: '';
        position: absolute;
        width: 24px;
        height: 22px;
        background: url(${arrow}) no-repeat;
        background-size: contain;
        top: 14px;
        right: -12px;
      }

      &:last-child::after {
        content: none;
      }
      .num {
        flex-shrink: 0;
        margin: 0 auto;
        position: relative;
        z-index: 1;
        background: #2d7dfd;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 24px;
        color: #ffffff;
        margin-bottom: 26px;
      }
    }
  }
  .list {
    .num {
      background: #2d7dfd;
      border-radius: 50%;
      height: 25px;
      width: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 16px;
      color: #ffffff;
    }
    .desc {
      p {
        position: relative;
        margin-bottom: 16px;
        &::before {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 100%;
          background: #2d7dfd;
          left: -14px;
          top: 9px;
        }
        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .step {
      display: none;
    }
    .list {
      .desc {
        p {
          font-size: 15px;
        }
      }
    }
  }
`;
