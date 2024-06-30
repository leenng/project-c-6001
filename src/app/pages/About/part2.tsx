import React from 'react';
import styled from 'styled-components';
import arrow from 'images/arrow.png';
const list = [
  {
    key: '1',
    title: 'System Entry(CRM)',
    desc: [
      'Customer profile (individual, dealer, agent, seven days, DOA) set up with product received (name, Tel,address)',
      'Product info collection, purchase voucher photo retention',
      'System (CRM) entry, work order printing',
    ],
  },
  {
    key: '2',
    title: 'Inspection and maintenance',
    desc: [
      'System (CRM) work order collection',
      'Info check (individual, dealer, seven days, DOA)',
      'Object and work order check + Inspection and maintenance',
      'Test result input system',
    ],
  },
  {
    key: '3',
    title: 'Warehouse(ERP)',
    desc: [
      'Product inventory application',
      'Confirmation of arrival order and registration in ERP system.',
      'Outbound, work order verification, work order product classification, record (ERP)',
      'System (ERP) physical and quantity management confirmation of outbound goods',
    ],
  },
  {
    key: '4',
    title: 'Delivery express logistics',
    desc: [
      'Physical check of work order ',
      'System(CRM) records the express delivery information',
      'Customer product logistics, express delivery completed',
      'System work order confirmation completed.',
    ],
  },
];
const Part2 = () => {
  return (
    <Div className="py-[40px] lg:py-[70px]">
      <p className="text-center text-[24px] mb-[28px] md:mb-[50px]">Workflow — Testing center</p>
      <div className="w px-[16px]">
        <div className="step">
          <div className="item">
            <div className="num">1</div>
            <p>System Entry(CRM)</p>
          </div>
          <div className="item">
            <div className="num">2</div>
            <p>Inspection and maintenance</p>
          </div>
          <div className="item">
            <div className="num">3</div>
            <p>Warehouse</p>
          </div>
          <div className="item">
            <div className="num">4</div>
            <p>Delivery express logistics</p>
          </div>
        </div>
        <div className="list grid gap-[15px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
