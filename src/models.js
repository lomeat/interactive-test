export const movies = {
  state: {
    1: {
      title: 'Movie 1',
      poster: '',
      rating: 8.4,
      description: 'Some description',
      isFavourite: false
    },
    2: {
      title: 'Movie 2',
      poster: '',
      rating: 7.6,
      description: 'Another description',
      isFavourite: true
    }
  },
  reducers: {},
  effects: {
    async fetchMovies(state, apiUrl) {
      const response = await fetch(apiUrl);
      const result = response.json();

      return {
        ...state,
        ...result.items
      };
    }
  }
};

export const favouriteMovies = {
  state: {
    2: {
      title: 'Movie 2',
      poster: '',
      rating: 7.6,
      description: 'Another description',
      isFavourite: true
    }
  },
  reducers: {
    add: (state, movie) => ({
      ...state,
      [Date.now()]: { ...movie, isFavourite: true }
    }),
    remove: (state, id) => {
      delete state[id];
      return { ...state };
    }
  }
};
