import React from 'react';
import Sidebar from '../../organisms/sidebar/Sidebar';
import Card from '../../molecules/Card/Card';

const MainTemplate = props => (
  <>
    <Sidebar></Sidebar>
    {props.children}
  </>
);

export default MainTemplate;
