import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../routes/routes';
import StyledLink from '../../atoms/StyledLink/StyledLink';
import PikachuPic from '../../../assets/SVGS/pikachu.svg';
import VenonatPic from '../../../assets/SVGS/venonat.svg';
import Heading3 from '../../atoms/Typography/Heading3/Heading3';
import styled from 'styled-components';
import Colors from '../../../constants/Colors';

const Container = styled.div`
    display:flex;
    width:300px;
    height:50px;
    padding:10px;
    justify-content:space-between;
    align-items:center;
    border-radius:15px;
    background-color:${Colors.blue};
    margin:10px auto;
    transition: background-color 0.2s ease-in-out;

    &:hover{
        background-color:${Colors.lightBlueDarken};
    }
`

const LinkToBrowsing = ({pokemonID}) => {
    const createNumberPage =()=> Math.floor(pokemonID/20);

    return( 
        <StyledLink to={routes.allPokemons + createNumberPage(pokemonID)}>
            <Container>
                <img src={PikachuPic} width="50px" height="50px" alt="Pikachu"/>
                <Heading3 fontColor="white">Go back to browsing</Heading3>
                <img src={VenonatPic} width="50px" height="50px" alt="Venonat" />
            </Container>
        </StyledLink>
        )
}

export default LinkToBrowsing;