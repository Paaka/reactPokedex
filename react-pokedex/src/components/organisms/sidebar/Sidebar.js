import React from 'react';
import logoSrc from '../../../assets/logo.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: darkblue;
  padding: 10px 20px;
`;

const Logo = styled.div`
  width: 200px;
  height: 50px;
  background-image: url(${logoSrc});
  background-position: 50% 50%;
  background-size: cover;
  background-size: 80%;
  background-repeat: no-repeat;
`;

const Sidebar = () => (
  <Wrapper>
    <Logo />
  </Wrapper>
);

export default Sidebar;
