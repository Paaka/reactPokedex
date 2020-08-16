import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-family: 'Alata', sans-serif;
  font-weight: 400;
  font-size: ${({ size }) => (size ? size + 'px' : '16px')};
`;

const H2 = ({ size, children }) => <StyledH2 size={size}>{children}</StyledH2>;

export default H2;
