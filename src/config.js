const apiUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'your api key';

const searchBaseUrl = `${apiUrl}search/movie?api_key=${apiKey}&language=en-US&query=`;
const popularBaseUrl = `${apiUrl}movie/popular?api_key=${apiKey}&language=en-US`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/';
const backdropSize = 'w1280';
const posterSize = 'w300';

export {
  searchBaseUrl,
  popularBaseUrl,
  apiUrl,
  apiKey,
  imageBaseUrl,
  backdropSize,
  posterSize,
};
