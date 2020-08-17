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
  const [links, setLinks] = useState([page - 1, page + 1]);

  const createLinks = currentPage => {
    if (currentPage === 0) {
      return [page, page + 1, page + 2];
    } else if (currentPage === 1) {
      return [page - 1, page, page + 1];
    } else if (currentPage >= 2) {
      return [page - 2, page - 1, page, page + 1, page + 2];
    } else {
      return [];
    }
  };

  const pageLinks = createLinks(page);

  const onClickHandler = num => {
    pageFn(num);
  };

  const doRouteValidation = num => {
    if (num < 0) {
      return 0;
    }

    return num;
  };

  return (
    <Wrapper>
      <NavigationButton
        onClickFn={() => onClickHandler(doRouteValidation(links[0]))}
        linkPath={routes.allPokemons + doRouteValidation(links[0])}
      >
        Previous
      </NavigationButton>
      {pageLinks.map(page => (
        <NavigationButton
          onClickFn={() => onClickHandler(page)}
          linkPath={routes.allPokemons + doRouteValidation(page)}
        >
          {page + 1}
        </NavigationButton>
      ))}
      <NavigationButton
        onClickFn={() => onClickHandler(doRouteValidation(links[1]))}
        linkPath={routes.allPokemons + doRouteValidation(links[1])}
      >
        Next
      </NavigationButton>
    </Wrapper>
  );
};

export default NavigationBetweenPokemons;
