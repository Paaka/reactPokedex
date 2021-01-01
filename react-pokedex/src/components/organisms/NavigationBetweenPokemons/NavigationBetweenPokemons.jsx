import React from 'react';
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
    margin-bottom:5vh;
`
const CentralPokemonHeading = styled.h2`
    position:absolute;
    bottom:-1rem;
    left:50%;
    margin:0 auto;
    transform:translateX(-50%);
    font-family: 'Alata', sans-serif;
    font-weight: 300;
    font-size:2rem;
    text-transform:capitalize;
`
const LeftItem = styled.div`
    height:100%;
    background-color:#bbb;
    clip-path: polygon(0% 0%, 100% 0%, 100% 70%,  50% 70%, 30% 100%,  0% 100%);
    margin-right:5px;
    transition:background-color 0.2s ease-in;
    position: relative;

    :hover{
        background-color:${typeColors.water};
    }
`
const RightItem = styled.div`
    position: relative;
    height:100%;
    background-color:#bbb;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 70% 100%, 50% 70%, 0% 70%);
    margin-left:5px;
    transition:background-color 0.2s ease-in;

    :hover{
        background-color:${typeColors.water};
    }
`;

const StyledLinkHeading = styled.h3`
    font-family: 'Alata', sans-serif;
    font-weight: 700;
    font-size:28px;
    text-transform:capitalize;
    padding:0;
    margin:0;
    position:absolute;
    left:${({left})=> left+"%"};
    top:25%;

    &:visited{
        color:#ccc;
    }
`;

const StyledPokemonSprite = styled.img`
    position:absolute;
    height:10vh;
    width:10vh;
    left:${({left})=> left + "%"};
    right:${({right})=> right + "%"};
`

const StyledLink = styled(Link)`
    width:50vw;
    text-decoration:none;
    color:#333;
`


const NavigationBetweenPokemons = (
    {pokemonName,
     pokemonInfo,
     pokemonID,
     changeLoadingFn}
    ) => {

    const changePokemonHandler = () => {
        changeLoadingFn(false);
    }
    
    const generatePokedexNumberAndName = (pokemonInfoAtribute) => {
        return FormatPokedexId(pokemonInfo[pokemonInfoAtribute].pokedexID)+" "+pokemonInfo[pokemonInfoAtribute].name
    }
    
    return (
        <Containter>     
            <StyledLink to={`/specificPokemon/${pokemonInfo.previousPokemon.pokedexID}`}
                        onClick={changePokemonHandler}>
                <LeftItem>
                    <StyledPokemonSprite
                        src={pokemonInfo.previousPokemon.spriteURL} 
                        alt="Pokemon shape"
                        left="30"/>
                    <StyledLinkHeading left={40}>
                        {generatePokedexNumberAndName("previousPokemon")}
                    </StyledLinkHeading>
                </LeftItem>     
            </StyledLink>
            <CentralPokemonHeading>
                {FormatPokedexId(pokemonID) + ' '+  pokemonName}
            </CentralPokemonHeading>
            <StyledLink 
                    to={`/specificPokemon/${pokemonInfo.nextPokemon.pokedexID}`}
                    onClick={changePokemonHandler}>
                <RightItem>
                    <StyledPokemonSprite 
                        src={pokemonInfo.nextPokemon.spriteURL} 
                        alt="Pokemon sprite"
                        right={30}/>
                    <StyledLinkHeading left={35}>
                        {generatePokedexNumberAndName("nextPokemon")}
                    </StyledLinkHeading>
                </RightItem>
            </StyledLink>
        </Containter>
    );
};

export default NavigationBetweenPokemons;