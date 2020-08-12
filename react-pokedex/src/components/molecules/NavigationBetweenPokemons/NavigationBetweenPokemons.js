import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../../routes/routes';

const NavigationBetweenPokemons = ({ page, pageFn }) => {
  const [links, setLinks] = useState([]);
  const Location = useLocation();

  const onClickHandler = num => {
    pageFn(num);
  };

  return (
    <div>
      <Link onClick={() => onClickHandler(page + 1)} to={routes.allPokemons + (page + 1)}>
        <p>{page}</p>
      </Link>
    </div>
  );
};

export default NavigationBetweenPokemons;
