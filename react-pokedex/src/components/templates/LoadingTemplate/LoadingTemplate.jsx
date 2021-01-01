import React from 'react';
import styled from 'styled-components';
import { RotateAnimation } from '../../../animations/animations';

import pokeballImage from '../../../assets/SVGS/pokeball.svg';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:90vh;
    background-color:#eee;
`

const StyledImage = styled.img`
    min-height:60px;
    min-width:60px;
    background-image: url(${pokeballImage});
    animation: ${RotateAnimation} 2s linear infinite;
`

const LoadingTemplate = () => (
    <Container>
        <StyledImage/>
    </Container>
)

export default LoadingTemplate;