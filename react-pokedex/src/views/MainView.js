import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MainTemplate from '../components/templates/MainTemplate/MainTamlate';
import routes from '../routes/routes';


const Wrapper = styled.div`
  width:100%;
  height:92vh;
  display:flex;
  justify-content:center;
  align-items:center;
`

const ItemWrapper = styled.div`
  background-color:red;
`



const MainView = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <ItemWrapper>
          <Link to={routes.first20Pokemon}>All Pokemen</Link>
        </ItemWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

export default MainView;
