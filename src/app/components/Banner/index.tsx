import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}
const Banner: React.FC<Props> = ({ children }) => {
  return <Div>{children}</Div>;
};

export { Banner };
const Div = styled.div`
  img {
    max-width: 1920px;
    display: block;
    width: 100%;
    margin: 0 auto;
  }
`;
