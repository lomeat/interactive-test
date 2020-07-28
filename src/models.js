const apiKey = process.env.REACT_APP_API_KEY;

export const movies = {
  state: [
    {
      id: Date.now(),
      title: 'Movie 1',
      image: '',
      imDbRating: 9.2,
      fullTitle: 'Movie 1 (2020)',
      isFavourite: false
    },
    {
      id: Date.now() + 132,
      title: 'Movie 2',
      image: '',
      imDbRating: 9.2,
      fullTitle: 'Movie 2 (2020)',
      isFavourite: false
    },
    {
      id: Date.now() + 212,
      title: 'Movie 3',
      image: '',
      imDbRating: 9.2,
      fullTitle: 'Movie 3 (2020)',
      isFavourite: false
    },
    {
      id: Date.now() + 334,
      title: 'Movie 4',
      image: '',
      imDbRating: 9.2,
      fullTitle: 'Movie 4 (2020)',
      isFavourite: false
    }
  ],
  reducers: {
    toggleIsFavourite(state, id) {
      return state.map(movie => {
        if (movie.id === id) {
          return { ...movie, isFavourite: !movie.isFavourite };
        }
        return movie;
      });
    }
  },
  effects: {
    async fetchMovies(state) {
      const response = await fetch(
        `https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`
      );
      const result = await response.json();

      return [...state, ...result.items];
    }
  }
};
