import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import { Home } from './Home';
import { Favourite } from './Favourite';

export const App = props => {
  return (
    <Router>
      <Navbar>
        <StLink to="/">Home</StLink>
        <StLink to="/favourite">Favourite</StLink>
      </Navbar>

      <Wrapper>
        <Container>
          <Switch>
            <Route path="/favourite">
              <Favourite />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Wrapper>
    </Router>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding: 30px 0;
`;

const Navbar = styled.div`
  width: 100vw;
  background: #eee;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const StLink = styled(Link)`
  margin-left: 20px;
  :first-child {
    margin: 0;
  }
`;
