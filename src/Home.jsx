import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

const apiKey = process.env.REACT_APP_API_KEY;

const HomePage = ({ fetchMovies, movies, toggleIsFavourite, isLoading }) => {
  // useEffect(() => {
  //   fetchMovies();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const [state, setState] = useState(movies);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`
      );
      const result = await response.json();
      console.log(result);

      // TODO: Max limit in day (800 of 100)

      setState(state => {
        return [...state, ...result.items];
      });
    };

    fetchData();
    console.log(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state.map(movie => (
    <React.Fragment key={movie.id}>
      <Li
        isFavourite={movie.isFavourite}
        onClick={() => toggleIsFavourite(movie.id)}
      >
        {movie.title}
      </Li>
      {isLoading && <Spinner name="line-scale" color="black" />}
    </React.Fragment>
  ));
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

const Li = styled.li`
  font-weight: ${props => (props.isFavourite ? 'bold' : 'regular')};
  :hover {
    cursor: pointer;
  }
`;
