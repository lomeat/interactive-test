import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import Pagination from 'react-js-pagination';

const HomePage = ({
  movies,
  toggleIsFavourite,
  isLoading,
  itemsCountPerPage,
  setMovies
}) => {
  // const localStorageMovies = JSON.parse(localStorage.getItem('movies'));
  const [activePage, setActivePage] = useState(1);
  const [currentMovies, setCurrentMovies] = useState(
    movies.slice(0, itemsCountPerPage)
  );

  // useEffect(() => {
  //   if (localStorageMovies !== null && localStorageMovies.length >= 1) {
  //     setMovies(localStorageMovies);
  //     setCurrentMovies(movies.slice(0, itemsCountPerPage));
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [movies]);

  const handlePageChange = page => {
    setActivePage(page);
    const start = (page - 1) * itemsCountPerPage;
    const end = start + itemsCountPerPage;
    setCurrentMovies(movies.slice(start, end));
  };

  return (
    <>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={movies.length}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        hideNavigation={true}
        innerClass="pagination"
        activeClass="pg-item-active"
        itemClass="pg-item"
      />
      <Grid>
        {currentMovies.map(movie => (
          <Li
            key={movie.id}
            isFavourite={movie.isFavourite}
            onClick={() => {
              toggleIsFavourite(movie.id);
              movie.isFavourite = !movie.isFavourite;
            }}
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
  toggleIsFavourite: id => dispatch.movies.toggleIsFavourite(id),
  setMovies: data => dispatch.movies.setMovies(data)
});

export const Home = connect(mapState, mapDispatch)(HomePage);

// Styles

const Grid = styled.div`
  width: 1000px;
  display: grid;
  padding: 30px 0;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media (max-width: 768px) {
    width: 95vw;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Li = styled.li`
  font-weight: ${props => (props.isFavourite ? 'bold' : 'regular')};
  :hover {
    cursor: pointer;
  }
`;
