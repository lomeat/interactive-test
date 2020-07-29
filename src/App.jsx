import React, { useEffect } from 'react';
import LiveChat from 'react-livechat';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import { Home } from './Home';
import { Favourite } from './Favourite';

const licenseId = 12112704;

const AppProvider = ({ fetchMovies }) => {
  // useEffect(() => {
  //   fetchMovies();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Router>
      <Navbar>
        <StLink to="/">Home</StLink>
        <StLink to="/favourite">Favourite</StLink>
      </Navbar>

      <Wrapper>
        <Switch>
          <Route path="/favourite">
            <Favourite />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Wrapper>
      <LiveChat license={licenseId} />
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
  align-items: center;
  flex-direction: column;
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
