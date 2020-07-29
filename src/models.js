import { getMovies } from './mock';

const apiKey = process.env.REACT_APP_API_KEY;

export const movies = {
  state: getMovies(50),
  reducers: {
    toggleIsFavourite(state, id) {
      return state.map(movie => {
        if (movie.id === id) {
          return { ...movie, isFavourite: !movie.isFavourite };
        }
        return movie;
      });
    },
    updateMovies(state, data) {
      return [...state, ...data];
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
