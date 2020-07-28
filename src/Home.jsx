import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

const apiKey = process.env.REACT_APP_API_KEY;

const HomePage = ({ fetchMovies, movies, toggleIsFavourite, isLoading }) => {
  useEffect(() => {
    fetchMovies(`https://imdb-api.com/en/API/Top250Movies/${apiKey}`);
  }, [fetchMovies]);

  return movies.map(movie => (
    <>
      <Li
        isFavourite={movie.isFavourite}
        key={movie.id}
        onClick={() => toggleIsFavourite(movie.id)}
      >
        {movie.title}
      </Li>
      {isLoading && <Spinner name="line-scale" color="black" />}
    </>
  ));
};

const mapState = state => ({
  movies: state.movies,
  isLoading: state.loading.effects.movies.fetchMovies
});

const mapDispatch = dispatch => ({
  fetchMovies: apiUrl => dispatch.movies.fetchMovies(apiUrl),
  toggleIsFavourite: id => dispatch.movies.toggleIsFavourite(id)
});

export const Home = connect(mapState, mapDispatch)(HomePage);

const Li = styled.li`
  font-weight: ${props => (props.isFavourite ? 'bold' : 'regular')};
  :hover {
    cursor: pointer;
  }
`;
