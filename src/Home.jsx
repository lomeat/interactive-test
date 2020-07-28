import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const HomePage = props => {
  useEffect(() => {
    props.fetchMovies('https://imdb-api.com/en/API/Top250Movies/k_QBHEB7Le');
  });

  return (
    <>
      <ul>
        {props.movies.map(movie => (
          <li key={movie.id} onClick={() => props.add(movie)}>
            {movie.title}
          </li>
        ))}
      </ul>
    </>
  );
};

const mapState = state => {
  const moviesIds = Object.keys(state.movies);
  return {
    movies: moviesIds.map(id => ({
      ...state.movies[id],
      id
    }))
  };
};

const mapDispatch = dispatch => ({
  fetchMovies: apiUrl => dispatch.movies.fetchMovies(apiUrl),
  add: movie => dispatch.favouriteMovies.add(movie)
});

export const Home = connect(mapState, mapDispatch)(HomePage);
