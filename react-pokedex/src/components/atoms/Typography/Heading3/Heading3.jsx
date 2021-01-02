import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h3`
margin:${({margin})=> margin ? margin : '0'};
padding:0;
font-family: 'roboto', sans-serif;
font-size:${({fSize})=> fSize ? fSize+"px": '1rem'};
color:${({fColor})=> fColor ? fColor : 'black'};
font-weight:${({fWeight})=> fWeight ? fWeight : '700'};
text-transform:${({textTransform})=> textTransform ? textTransform : 'none'};
`
const Heading3 = (
{children,
fontSize,
fontColor,
fontWeight,
margin,
textTransform}) => <StyledHeading
                 fSize={fontSize}
                 fColor={fontColor}
                 fontWeight={fontWeight}
                 margin={margin}
                 textTransform={textTransform}>{children}</StyledHeading>
                 
export default Heading3;