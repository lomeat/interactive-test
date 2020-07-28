import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const HomePage = ({ fetchMovies, movies, toggleIsFavourite }) => {
  useEffect(() => {
    fetchMovies('https://imdb-api.com/en/API/Top250Movies/k_QBHEB7Le');
  }, [fetchMovies]);

  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} onClick={() => toggleIsFavourite(movie.id)}>
            {movie.title}
          </li>
        ))}
      </ul>
    </>
  );
};

const mapState = state => ({
  movies: state.movies
});

const mapDispatch = dispatch => ({
  fetchMovies: apiUrl => dispatch.movies.fetchMovies(apiUrl),
  toggleIsFavourite: id => dispatch.movies.toggleIsFavourite(id)
});

export const Home = connect(mapState, mapDispatch)(HomePage);
