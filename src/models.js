export const movies = {
  state: [
    {
      id: Date.now,
      title: 'Movie 1',
      image: '',
      imDbRating: 9.2,
      fullTitle: 'Movie 1 (2020)',
      isFavourite: false
    }
  ],
  reducers: {
    toggleIsFavourite(state, id) {
      const movie = state.find(movie => movie.id === id);
      const newState = state.filter(movie => movie.id !== id);
      return [...newState, { ...movie, isFavourite: !movie.isFavourite }];
    }
  },
  effects: {
    async fetchMovies(state, apiUrl) {
      const response = await fetch(apiUrl);
      const result = await response.json();
      console.log(result);

      return [...state, ...result.items];
    }
  }
};
