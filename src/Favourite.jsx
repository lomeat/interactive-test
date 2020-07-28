import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const FavouritePage = ({ movies, toggleIsFavourite }) => {
  const filteredMovies = movies.filter(movie => movie.isFavourite === true);

  return (
    <>
      <ul>
        {filteredMovies.map(movie => (
          <Li key={movie.id} onClick={() => toggleIsFavourite(movie.id)}>
            {movie.title}
          </Li>
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

const Li = styled.li`
  :hover {
    cursor: pointer;
  }
`;
