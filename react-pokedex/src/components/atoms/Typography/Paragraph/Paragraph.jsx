import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    margin:0;
    padding:0;
    font-family: 'Noto Sans JP', sans-serif;
    font-size:${({fSize})=> fSize ? fSize+"px": '1rem'};
    color:${({fColor})=> fColor ? fColor : 'black'};
    font-weight:${({fWeight})=> fWeight ? fWeight : '400'};
`
const Paragraph = (
    {children,
    fontSize,
    fontColor,
    fontWeight}) => <StyledP
                     fSize={fontSize}
                     fColor={fontColor}
                     fontWeight={fontWeight}>{children}</StyledP>
                     
export default Paragraph;