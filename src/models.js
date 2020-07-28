export const movies = {
  state: [
    {
      id: Date.now,
      title: 'Movie 1',
      image: '',
      imDbRating: 9.2,
      fullTitle: 'Movie 1 (2020)',
      isFavourite: false
    },
    {
      id: Date.now + 1,
      title: 'Movie 2',
      image: '',
      imDbRating: 9.2,
      fullTitle: 'Movie 2 (2020)',
      isFavourite: false
    },
    {
      id: Date.now + 2,
      title: 'Movie 3',
      image: '',
      imDbRating: 9.2,
      fullTitle: 'Movie 3 (2020)',
      isFavourite: false
    },
    {
      id: Date.now + 3,
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
    async fetchMovies(state, apiUrl) {
      const response = await fetch(apiUrl);
      const result = await response.json();
      console.log(response);

      return [...state, ...result.items];
    }
  }
};
