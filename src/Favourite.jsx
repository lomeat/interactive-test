import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const FavouritePage = props => {
  return (
    <>
      <ul>
        {props.movies.map(movie => (
          <li key={movie.id} onClick={() => props.remove(movie.id)}>
            {movie.title}
          </li>
        ))}
      </ul>
    </>
  );
};

const mapState = state => {
  const moviesIds = Object.keys(state.favouriteMovies);
  return {
    movies: moviesIds.map(id => ({
      ...state.favouriteMovies[id],
      id
    }))
  };
};

const mapDispatch = dispatch => ({
  remove: id => dispatch.favouriteMovies.remove(id)
});

export const Favourite = connect(mapState, mapDispatch)(FavouritePage);
