import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Paragraph from '../../atoms/Typography/Paragraph/Paragraph';

const StyledLink = styled(Link)`
    text-decoration:none;
    text-align:center;
    transition:all 0.25s ease-in;
    padding:5px;
    border-radius:10px;
    &:hover{
        transform:scale(1.2);
        background-color: #444;
    }
`


const Wrapper = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:50vw;
    height:200px;
    border-radius:10px;
    background-color:#333;
    margin:10px auto;
    padding:10px;
    clip-path:polygon(0% 0%,  100% 0%, 100% 100%, 5% 100%, 0% 90%);
`

const SingleEvolutionPokemon = ({pokemon, onClickFn}) => (
    <StyledLink to={`/specificPokemon/${pokemon.pokedexID}`} onClick={onClickFn} >
        <img src={pokemon.pokemonImage} alt="pokemon" />
        <Paragraph fontColor="#ddd" textTransform="capitalize">{pokemon.name}</Paragraph>
    </StyledLink>
)

const EvolutionChain = ({evolutionChain, loadingFn}) => { 
    const onClickHandler = () => {
        loadingFn();
    }

    return(
        <Wrapper>
            {evolutionChain.map(pokemon => <SingleEvolutionPokemon
                                                     onClickFn={onClickHandler}
                                                     pokemon={pokemon}
                                                     key={pokemon.name} />)}
        </Wrapper>
    )
}

export default EvolutionChain;