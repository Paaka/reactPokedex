import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 2px 15px;
  background-color: orangered;
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

const NavigationButton = ({ children, onClickFn, linkPath }) => {
  const onClickHandler = () => {
    onClickFn();
  };

  return (
    <Wrapper>
      <Link style={{ textDecoration: 'none' }} onClick={onClickHandler} to={linkPath}>
        <StyledP>{children}</StyledP>
      </Link>
    </Wrapper>
  );
};

export default NavigationButton;
