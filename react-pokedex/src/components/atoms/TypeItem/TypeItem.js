import React from 'react';
import styled from 'styled-components';
import typeColors from '../../../constants/typeColors';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ type }) => typeColors[type]};
`;

const StyledText = styled.p`
  margin: 0;
  font-size: 18px;
  color: white;
  font-family: 'Ubuntu', sans-serif;
  text-transform: capitalize;
  padding: 5px;
`;

const TypeItem = ({ children }) => {
  return (
    <Wrapper type={children}>
      <StyledText>{children}</StyledText>
    </Wrapper>
  );
};

export default TypeItem;
