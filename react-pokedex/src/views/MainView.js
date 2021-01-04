import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainMenuCard from '../components/molecules/MainMenuCard/MainMenuCard';

import MainTemplate from '../components/templates/MainTemplate/MainTamlate';
import Colors from '../constants/Colors';
import routes from '../routes/routes';

import PokeballImage from '../assets/SVGS/pokeballWhite.svg';
import MoveImage from '../assets/SVGS/music-player.svg';
import GamesImage from '../assets/SVGS/joystick.svg';
import AboutImage from '../assets/SVGS/about.svg';


const Wrapper = styled.div`
  width:100%;
  height:92vh;
  display:flex;
  justify-content:center;
  align-items:center;
`

const ItemWrapper = styled.div`
  display:grid;
  width:25%;
  height:60vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:1fr 1fr;
  justify-items:center;
  grid-row-gap:20px;
  
`



const MainView = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <ItemWrapper>
          <MainMenuCard 
            cardColor={Colors.orange} 
            linkTo={routes.first20Pokemon}
            image={PokeballImage}
          >Pokedex</MainMenuCard>
          <MainMenuCard 
            cardColor={Colors.yellow} 
            linkTo={routes.first20Pokemon}
            image={MoveImage}
          >Moves</MainMenuCard>
          <MainMenuCard 
            cardColor={Colors.green} 
            linkTo={routes.first20Pokemon}
            image={GamesImage}
          >Games</MainMenuCard>
          <MainMenuCard 
            cardColor={Colors.blue} 
            linkTo={routes.first20Pokemon}
            image={AboutImage}
          >About</MainMenuCard>
        </ItemWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

export default MainView;
