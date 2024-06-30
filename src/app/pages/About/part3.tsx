import React from 'react';
import styled from 'styled-components';
import zs1 from 'images/zs-1.png';
import zs2 from 'images/zs-2.png';
import zs3 from 'images/zs-3.png';

const Part3 = () => {
  return (
    <Div className="bg-[#EDEDED] py-[40px] lg:py-[90px]">
      <div className="w px-[16px]">
        <div>
          <div className="w px-[16px]">
            <p className="text-[24px] text-center mb-[30px] lg:mb-[60px] ">Company qualifications</p>
          </div>
          <div className="img-container ">
            <div>
              <img src={zs1} alt="" />
            </div>
            <div>
              <img src={zs2} alt="" />
            </div>
            <div>
              <img src={zs3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};
export { Part3 };

const Div = styled.div`
  .img-container {
    display: flex;
    div:nth-child(2) {
      margin: 0 10px;
    }
    img {
      display: block;
      max-width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    .img-container {
      justify-content: space-between;
      flex-wrap: wrap;
      /* flex-direction: column; */
      div:nth-child(1) {
        width: 100%;
        margin-bottom: 10px;
      }
      div:nth-child(2) {
        margin: 0 0px;
      }
      div:nth-child(2),
      div:nth-child(3) {
        width: 49%;
      }
    }
  }
`;
