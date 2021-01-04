import React from 'react';
import styled from 'styled-components';

import StyledLink from '../../atoms/StyledLink/StyledLink';
import Paragraph from '../../atoms/Typography/Paragraph/Paragraph';


const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:200px;
    height:100%;
    background-color:${({cardColor}) => cardColor};
    border-radius:10px;
    transition:transform 0.2s ease-in;
    transform:skewY(10deg);

    :hover{
    transform:skewY(0);
    }
`

const StyledImg = styled.img`
   margin-bottom:10px;
`

const MainMenuCard = ({cardColor, linkTo, children, image}) =>{
    return(
        <StyledLink to={linkTo}>
            <Wrapper cardColor={cardColor}>
                <StyledImg src={image} width="50px" height="50px"/>
                <Paragraph fontSize={20} fontColor="white">
                {children}
                </Paragraph>
            </Wrapper>
        </StyledLink>
    );
}

export default MainMenuCard;