import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const FavouritePage = ({ movies, toggleIsFavourite }) => {
  const filteredMovies = movies.filter(movie => movie.isFavourite === true);

  return (
    <>
      <ul>
        {filteredMovies.map(movie => (
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
  toggleIsFavourite: id => dispatch.movies.toggleIsFavourite(id)
});

export const Favourite = connect(mapState, mapDispatch)(FavouritePage);
