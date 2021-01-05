import React from 'react';
import logoSrc from '../../../assets/logo.png';
import styled from 'styled-components';
import Colors from '../../../constants/Colors';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarItem from '../../molecules/SidebarItem/SidebarItem';
import routes from '../../../routes/routes';
;

const Wrapper = styled.div`
  display:flex;
  height:5vh;
  width:100%;
  background-color:white;
  justify-content:center;
  padding-bottom:5px;
  border-bottom:1px solid gray;
`;


const Sidebar = () => {

  

  return (
    <Wrapper>
      <SidebarItem linkTo="/" activeRoute="" color={Colors.gray} >Home</SidebarItem>
      <SidebarItem linkTo={routes.first20Pokemon} activeRoute="all" secondActiveRoute="specificPokemon" color={Colors.orange}>Pokedex</SidebarItem>
      <SidebarItem linkTo={routes.moves} activeRoute="moves" color={Colors.yellow}>Moves</SidebarItem>
      <SidebarItem linkTo={routes.games} activeRoute="games" color={Colors.green}>Games</SidebarItem>
      <SidebarItem linkTo={routes.about} activeRoute="about" color={Colors.blue}>About</SidebarItem>
    </Wrapper>
  );
}

export default Sidebar;
