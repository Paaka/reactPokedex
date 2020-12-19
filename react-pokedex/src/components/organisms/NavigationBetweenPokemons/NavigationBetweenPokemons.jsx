import React from 'react';
import styled from 'styled-components';
import { FormatPokedexId } from '../../../utilities/utilities';

const Containter = styled.div`
    height:15vh;
    width:100%;
    background-color:blue;
    margin:0;
    position:relative;
    display:flex;
`

const CentralPokemonName = styled.h2`
    position:absolute;
    bottom:0;
    left:40%;
    margin:0 auto;
`

const LeftItem = styled.div`
    height:100%;
    width:48%;
`
const RightItem = styled.div`
    height:100%;
    width:48%;
    background-color:orangered;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 70% 100%, 50% 70%, 0% 70%);
`


const NavigationBetweenPokemons = ({pokemonName, pokemonID}) => (
    <Containter>
        <LeftItem>
            XD
        </LeftItem>
        <CentralPokemonName>
            {FormatPokedexId(pokemonID) + ' '+  pokemonName}
        </CentralPokemonName>
        <RightItem>
            XD
        </RightItem>
    </Containter>
);

export default NavigationBetweenPokemons;