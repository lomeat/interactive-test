import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import { Home } from './Home';
import { Favourite } from './Favourite';

const AppProvider = ({ fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

const mapDispatch = dispatch => ({
  fetchMovies: () => dispatch.movies.fetchMovies()
});

export const App = connect(null, mapDispatch)(AppProvider);

// Styles

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
