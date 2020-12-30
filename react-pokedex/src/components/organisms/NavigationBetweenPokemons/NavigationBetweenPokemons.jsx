import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import typeColors from '../../../constants/typeColors';
import { FormatPokedexId } from '../../../utilities/utilities';

const Containter = styled.div`
    height:10vh;
    width:100%;
    margin:0;
    position:relative;
    display:flex;
`

const CentralPokemonName = styled.h2`
    position:absolute;
    bottom:0;
    left:50%;
    margin:0 auto;
    transform:translateX(-50%);
`

const LeftItem = styled.div`
    height:100%;
    background-color:#bbb;
    clip-path: polygon(0% 0%, 100% 0%, 100% 70%,  50% 70%, 30% 100%,  0% 100%);
    margin-right:5px;
    
    transition:background-color 0.2s ease-in;

    :hover{
        background-color:${typeColors.water};
    }
`
const RightItem = styled.div`
    height:100%;
    background-color:#bbb;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 70% 100%, 50% 70%, 0% 70%);
    margin-left:5px;
    transition:background-color 0.2s ease-in;

    :hover{
        background-color:${typeColors.water};
    }
`

const StyledLink = styled(Link)`
    width:50vw;
    text-decoration:none;
`


const NavigationBetweenPokemons = ({pokemonName, pokemonInfo, pokemonID, changeLoadingFn}) => {
    const changePokemonHandler = () => {
        changeLoadingFn(false);
    }
    
    return (
        <Containter>     
            <StyledLink to={`/specificPokemon/${pokemonInfo.previousPokemon.pokedexID}`}
                    onClick={changePokemonHandler} 
                    style={{textDecoration:'none'}}
            >
                <LeftItem>
                    <img src={pokemonInfo.previousPokemon.spriteURL} />
                    {pokemonInfo.previousPokemon.name}
                </LeftItem>     
            </StyledLink>
            <CentralPokemonName>
                {FormatPokedexId(pokemonID) + ' '+  pokemonName}
            </CentralPokemonName>
            <StyledLink to={`/specificPokemon/${pokemonInfo.nextPokemon.pokedexID}`}
                  onClick={changePokemonHandler} 
                  style={{textDecoration:'none'}} >
                <RightItem>
                    {pokemonInfo.nextPokemon.name}
                </RightItem>
            </StyledLink>
        </Containter>
    );
};

export default NavigationBetweenPokemons;