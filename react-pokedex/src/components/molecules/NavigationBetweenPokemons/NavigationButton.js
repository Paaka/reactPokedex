import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 2px 15px;
  background-color: ${({isActive})=> isActive ? 'green' :'orangered'};
  border-radius: 15px;

  :hover {
    background-color: grey;
  }
`;

const StyledP = styled.p`
  font-size: 16px;
  padding: 5px;
  margin: 0;
  color: white;
`;

const NavigationButton = ({ children, onClickFn, linkPath, isActive }) => {
  const onClickHandler = () => {
    onClickFn();
  };

  return (
    <Wrapper isActive={isActive}>
      <Link style={{ textDecoration: 'none' }} onClick={onClickHandler} to={linkPath}>
        <StyledP>{children}</StyledP>
      </Link>
    </Wrapper>
  );
};

export default NavigationButton;
