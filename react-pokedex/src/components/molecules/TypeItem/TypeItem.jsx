import React from 'react';
import styled from 'styled-components';
import typeColors from '../../../constants/typeColors';
import Paragraph from '../../atoms/Typography/Paragraph/Paragraph';

const Wrapper = styled.div`
    display:flex;
    background-color:${({typeX})=> typeColors[typeX]};
    width:140px;
    height:30px;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    margin-right:5px;
`

const TypeItem = ({type}) => (
    <Wrapper typeX={type}>
        <Paragraph fontColor="white" fontWeight={300}>{type}</Paragraph>
    </Wrapper>);

export default TypeItem;

