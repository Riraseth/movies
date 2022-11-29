import { useState, useEffect } from 'react';
import API from '../API';

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.getMovie(movieId);
        const credits = await API.getCredits(movieId);
        const directors = credits.crew.filter(
          (member) => member.job === 'Director'
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    getMovie();
  }, [movieId]);

  return { state, loading, error };
};
