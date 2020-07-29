import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';

const FavouritePage = ({ movies, toggleIsFavourite }) => {
  const favMovies = movies.filter(movie => movie.isFavourite === true);

  return (
    <>
      <Pagination />
      <Grid>
        {favMovies.map(movie => (
          <Li key={movie.id} onClick={() => toggleIsFavourite(movie.id)}>
            {movie.title}
          </Li>
        ))}
      </Grid>
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

// Styles

const Grid = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding: 30px 0;

  @media (max-width: 768px) {
    width: 95vw;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Li = styled.li`
  :hover {
    cursor: pointer;
  }
`;
