import React from 'react';
import { Nav } from '../Nav/index';

import styled from 'styled-components';
import { LanguageChange } from 'app/components/LanguageChange';
import { useMediaQuery } from 'react-responsive';

import logo from 'images/logo.png';

interface HeaderProps {
  hideMenu?: boolean;
}
const Header: React.FC<HeaderProps> = ({ hideMenu }) => {
  const isMobile = useMediaQuery({ maxWidth: '768px' });
  return (
    <Div className={`mx-auto animate__animated  animate__fadeInDown`}>
      <div className="w">
        <div className="animate__animated  animate__fadeInLeft">
          <img className={`logo `} src={logo} alt="logo" />
        </div>
        <div className="flex flex-1 ml-[9%] justify-end">{!hideMenu && <Nav />}</div>
        {!isMobile && (
          <div className="animate__animated  animate__fadeInRight">
            <LanguageChange />
          </div>
        )}
      </div>
    </Div>
  );
};

export { Header };
Header.defaultProps = {
  hideMenu: false,
};

const Div = styled.div`
  position: fixed;
  top: 0px;
  padding: 10px 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  z-index: 99;
  .w {
    padding: 0 10px;
    display: flex;
    align-items: center;
  }
  .logo {
    height: 50px;
    &.light {
      filter: invert(80%);
    }
  }
  @media screen and (max-width: 768px) {
    padding: 10px 15px;
    .logo {
      height: 30px;
    }
  }
`;
