import React from 'react';
import { Link } from 'react-router-dom';

import MainTemplate from '../components/templates/MainTemplate/MainTamlate';
import routes from '../routes/routes';

const MainView = () => {
  return (
    <MainTemplate>
      <Link to={routes.first20Pokemon}>All Pokemen</Link>
    </MainTemplate>
  );
};

export default MainView;
