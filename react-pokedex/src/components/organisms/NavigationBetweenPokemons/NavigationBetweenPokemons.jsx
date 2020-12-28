import React from 'react';
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
    width:50%;
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
    width:50%;
    background-color:#bbb;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 70% 100%, 50% 70%, 0% 70%);
    margin-left:5px;
    transition:background-color 0.2s ease-in;

    :hover{
        background-color:${typeColors.water};
    }
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