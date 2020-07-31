import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';

const FavouritePage = ({
  movies,
  toggleIsFavourite,
  itemsCountPerPage,
  setMovies
}) => {
  const favMovies = movies.filter(movie => movie.isFavourite === true);

  // const [favMovies, setFavMovies] = useState(
  //   // localStorageMovies.filter(movie => movie.isFavourite === true)
  //   movies.filter(movie => movie.isFavourite === true)
  // );
  const [activePage, setActivePage] = useState(1);
  const [currentMovies, setCurrentMovies] = useState(
    favMovies.slice(0, itemsCountPerPage)
  );

  const handlePageChange = page => {
    console.log(`Active page: ${page}`);
    setActivePage(page);

    if (page === 1) {
      setCurrentMovies(favMovies.slice(0, itemsCountPerPage));
    } else {
      const start = (page - 1) * itemsCountPerPage;
      const end = start + itemsCountPerPage;
      setCurrentMovies(favMovies.slice(start, end));
    }
  };

  return (
    <>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={favMovies.length}
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
            isFavourite={movie.isFavourite}
            key={movie.id}
            onClick={() => {
              toggleIsFavourite(movie.id);
              movie.isFavourite = !movie.isFavourite;
            }}
          >
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
  toggleIsFavourite: id => dispatch.movies.toggleIsFavourite(id),
  setMovies: data => dispatch.movies.setMovies(data)
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
  display: ${props => (props.isFavourite ? 'block' : 'none')};
  :hover {
    cursor: pointer;
  }
`;
