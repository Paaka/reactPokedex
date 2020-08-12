import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../../routes/routes';

const NavigationBetweenPokemons = () => {
  const [links, setLinks] = useState([]);
  const Location = useLocation();

  const awesomeFunc = () => {
    console.log('1 time ');
  };

  awesomeFunc();

  return <div></div>;
};

export default NavigationBetweenPokemons;
