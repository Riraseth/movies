import { searchBaseUrl, popularBaseUrl, apiUrl, apiKey } from './config';

const API = {
  getMovies: async (searchMovie, page) => {
    const endpoint = searchMovie
      ? `${searchBaseUrl}${searchMovie}&page=${page}`
      : `${popularBaseUrl}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  getMovie: async (movieId) => {
    const endpoint = `${apiUrl}movie/${movieId}?api_key=${apiKey}`;
    return await (await fetch(endpoint)).json();
  },
  getCredits: async (movieId) => {
    const creditsEndpoint = `${apiUrl}movie/${movieId}/credits?api_key=${apiKey}`;
    return await (await fetch(creditsEndpoint)).json();
  },
};

export default API;
