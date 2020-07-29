import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

const HomePage = ({ movies, toggleIsFavourite, isLoading }) =>
  movies.map(movie => (
    <React.Fragment key={movie.id}>
      <Li
        isFavourite={movie.isFavourite}
        onClick={() => toggleIsFavourite(movie.id)}
      >
        {movie.title}
      </Li>
      {isLoading && <Spinner name="line-scale" color="black" />}
    </React.Fragment>
  ));

const mapState = state => ({
  movies: state.movies,
  isLoading: state.loading.effects.movies.fetchMovies
});

const mapDispatch = dispatch => ({
  fetchMovies: async () => dispatch.movies.fetchMovies(),
  toggleIsFavourite: id => dispatch.movies.toggleIsFavourite(id)
});

export const Home = connect(mapState, mapDispatch)(HomePage);

// Styles

const Li = styled.li`
  font-weight: ${props => (props.isFavourite ? 'bold' : 'regular')};
  :hover {
    cursor: pointer;
  }
`;
