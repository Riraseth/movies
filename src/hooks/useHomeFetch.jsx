import { useState, useEffect } from 'react';
import API from '../API';

const initState = {
  page: 0,
  results: [],
};

export const useHomeFetch = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [state, setState] = useState(initState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const getMovies = async (page, searchMovie = '') => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.getMovies(searchMovie, page);
      console.log(movies);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    setState(initState);
    getMovies(1, searchMovie);
  }, [searchMovie]);

  useEffect(() => {
    if (!isLoading) return;

    getMovies(state.page + 1, searchMovie);
    setisLoading(false);
  }, [isLoading, searchMovie, state.page]);

  return { state, loading, error, searchMovie, setSearchMovie, setisLoading };
};
