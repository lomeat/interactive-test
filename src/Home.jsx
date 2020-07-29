import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import Pagination from 'react-js-pagination';

const HomePage = ({ movies, toggleIsFavourite, isLoading }) => {
  const itemsCountPerPage = 20;

  const [activePage, setActivePage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(
    movies.slice(0, itemsCountPerPage)
  );

  const handlePageChange = page => {
    console.log(`Active page: ${page}`);
    setActivePage(page);

    if (page === 1) {
      setMoviesPerPage(movies.slice(0, itemsCountPerPage));
    } else {
      const start = Number(page * 10 + (page - 1));
      const end = Number(start + itemsCountPerPage);
      setMoviesPerPage(movies.slice(start, end));
    }
  };

  return (
    <>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={movies.length}
        pageRangeDisplayed={3}
        onChange={handlePageChange}
        innerClass="pagination"
        activeClass="pg-item-active"
        itemClass="pg-item"
      />
      <Grid>
        {moviesPerPage.map(movie => (
          <Li
            key={movie.id}
            isFavourite={movie.isFavourite}
            onClick={() => toggleIsFavourite(movie.id)}
          >
            {movie.title}
          </Li>
        ))}
      </Grid>
      {isLoading && <Spinner name="line-scale" color="black" />}
    </>
  );
};

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

const Grid = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding: 30px 0;
`;

const Li = styled.li`
  font-weight: ${props => (props.isFavourite ? 'bold' : 'regular')};
  :hover {
    cursor: pointer;
  }
`;
