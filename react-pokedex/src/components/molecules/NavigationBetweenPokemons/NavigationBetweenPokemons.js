import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../../routes/routes';
import NavigationButton from './NavigationButton';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  margin: 5px auto;
`;

const NavigationBetweenPokemons = ({ page, pageFn }) => {
  const location = useLocation();
  const currentPage = Number.parseInt(location.pathname.split("/")[2]);

  const createLinks = currentPage => {
    if (currentPage === 0) {
      return [currentPage, currentPage + 1, currentPage + 2];
    } else if (currentPage === 1) {
      return [currentPage - 1, currentPage, currentPage + 1];
    } else if (currentPage >= 2 && currentPage <11) {
      return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
    } else if(currentPage === 11){
      return [currentPage - 2, currentPage - 1, currentPage, 12, 0];
    } else if(currentPage === 12){
      return [currentPage - 2, currentPage - 1, currentPage, 0, 1];
    } 
      else {
      return [];
    }
  };

  const [links, setLinks] = useState(createLinks(currentPage));


  const onClickHandler = num => {
    pageFn(num);
  };

  const doRouteValidation = num => {
    if (num < 0) {
      return 12;
    }
    else if(num > 12){
      return 0;
    }

    return num;
  };

  const chceckIfLinkIsActive = (page) => {
    if(currentPage === page) return true;
    return false;
  }

  return (
    <Wrapper>
      <NavigationButton
        onClickFn={() => onClickHandler(doRouteValidation(currentPage-1))}
        linkPath={routes.allPokemons + doRouteValidation(currentPage-1)}
      >
        Previous
      </NavigationButton>
      {links.map(page => (
        <NavigationButton
          key={page}
          onClickFn={() => onClickHandler(page)}
          linkPath={routes.allPokemons + doRouteValidation(page)}
          isActive={chceckIfLinkIsActive(page)}
        >
          {page + 1}
        </NavigationButton>
      ))}
      <NavigationButton
        onClickFn={() => onClickHandler(doRouteValidation(currentPage +1))}
        linkPath={routes.allPokemons + doRouteValidation(currentPage +1)}
      >
        Next
      </NavigationButton>
    </Wrapper>
  );
};

export default NavigationBetweenPokemons;
