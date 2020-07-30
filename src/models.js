import { getMovies } from './mock';

const apiKey = process.env.REACT_APP_API_KEY;

export const movies = {
  // TODO: To use API data change to []
  state: getMovies(250),
  reducers: {
    toggleIsFavourite(state, id) {
      const newState = state.map(movie => {
        if (movie.id === id) {
          return { ...movie, isFavourite: !movie.isFavourite };
        }
        return movie;
      });

      localStorage.setItem('movies', JSON.stringify(newState));
      return newState;
    },
    updateMovies(state, data) {
      return [...state, ...data];
    },
    setMovies(state, data) {
      return [...data];
    }
  },
  effects: {
    async fetchMovies() {
      const response = await fetch(
        `https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`
      );
      const result = await response.json();
      this.updateMovies(result.items);
    }
  }
};
