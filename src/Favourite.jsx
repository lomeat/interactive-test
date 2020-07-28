import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const FavouritePage = ({ movies, toggleIsFavourite }) => {
  const favMovies = movies.filter(movie => movie.isFavourite === true);

  return favMovies.map(movie => (
    <Li key={movie.id} onClick={() => toggleIsFavourite(movie.id)}>
      {movie.title}
    </Li>
  ));
};

const mapState = state => ({
  movies: state.movies
});

const mapDispatch = dispatch => ({
  toggleIsFavourite: id => dispatch.movies.toggleIsFavourite(id)
});

export const Favourite = connect(mapState, mapDispatch)(FavouritePage);

// Styles

const Li = styled.li`
  :hover {
    cursor: pointer;
  }
`;
