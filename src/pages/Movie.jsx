import { useParams } from 'react-router-dom';
import { imageBaseUrl, posterSize } from '../config';
import { useMovieFetch } from '../hooks/useMovieFetch';
import BreadCrumb from '../components/Breadcrumb';
import Grid from '../components/Grid';
import Spinner from '../components/Spinner';
import MovieInfo from '../components/MovieInfo';
import MovieInfoBar from '../components/MovieInfoBar';
import Actor from '../components/Actor';
import NoImage from '../images/no_image.png';

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            image={
              actor.profile_path
                ? `${imageBaseUrl}${posterSize}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
