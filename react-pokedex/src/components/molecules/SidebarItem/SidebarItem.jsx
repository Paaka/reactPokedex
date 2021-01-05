import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom'

const StyledNavLink = styled(NavLink)`
  display:flex;
  width:80px;
  height:100%;
  background-color:${({isHighlighted, navColor})=> isHighlighted ? navColor : 'white'};
  border-bottom:5px solid ${({navColor}) => navColor};
  text-decoration:none;
  justify-content:center;
  align-items:center;
  transition:all 0.2s ease-in;
  color:${({isHighlighted})=> isHighlighted ? 'white' : 'black'};

  :hover{
    background-color:${({navColor}) => navColor};
    color:white;
  }
`

const SidebarItem = ({children, linkTo, color, activeRoute, secondActiveRoute}) => {
    const location = useLocation();

    const setUpCurrentLocation = (firstRoute,secondRoute) => {
      const splitedArray = location.pathname.split("/");

        if(splitedArray[1] === firstRoute || splitedArray[1] === secondActiveRoute){
          return true;
        }else{
          return false;
        }
    }

    
    const isOnOwnRoute =  setUpCurrentLocation(activeRoute, secondActiveRoute);
      
    return <StyledNavLink isHighlighted={isOnOwnRoute} to={linkTo} navColor={color}>{children}</StyledNavLink>
}

export default SidebarItem;