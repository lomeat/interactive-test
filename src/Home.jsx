import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const apiKey = process.env.REACT_APP_API_KEY;

const HomePage = ({ fetchMovies, movies, toggleIsFavourite }) => {
  useEffect(() => {
    fetchMovies(`https://imdb-api.com/en/API/Top250Movies/${apiKey}`);
  }, [fetchMovies]);

  return (
    <>
      <ul>
        {movies.map(movie => (
          <Li
            isFavourite={movie.isFavourite}
            key={movie.id}
            onClick={() => toggleIsFavourite(movie.id)}
          >
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
  fetchMovies: apiUrl => dispatch.movies.fetchMovies(apiUrl),
  toggleIsFavourite: id => dispatch.movies.toggleIsFavourite(id)
});

export const Home = connect(mapState, mapDispatch)(HomePage);

const Li = styled.li`
  font-weight: ${props => (props.isFavourite ? 'bold' : 'regular')};
  :hover {
    cursor: pointer;
  }
`;
