const getMovie = id => {
  const movie = {
    id: Date.now() + 100 + id,
    title: `Movie title #${id}`,
    image: '',
    imDbRating: 9.2,
    fullTitle: 'ESM (2020)',
    isFavourite: false
  };

  return movie;
};

export const getMovies = size => {
  let arr = [];
  for (let a = 1; a <= size; a += 1) {
    arr.push(getMovie(a));
  }
  return arr;
};
