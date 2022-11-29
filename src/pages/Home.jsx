import { posterSize, backdropSize, imageBaseUrl } from '../config';
import HeroImage from '../components/HeroImage';
import Grid from '../components/Grid';
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import SearchBar from '../components/Search';
import Button from '../components/Button';
import { useHomeFetch } from '../hooks/useHomeFetch';
import NoImage from '../images/no_image.png';

const Home = () => {
  const { state, loading, error, searchMovie, setSearchMovie, setisLoading } =
    useHomeFetch();

  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
      {!searchMovie && state.results[0] && (
        <HeroImage
          image={`${imageBaseUrl}${backdropSize}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
          rating={state.results[0].vote_average}
          release_date={state.results[0].release_date}
          vote_count={state.results[0].vote_count}
        />
      )}
      <SearchBar setSearchMovie={setSearchMovie} />
      <Grid header={searchMovie ? 'Search Result' : 'Popular Movies'}>
        {state.results.map((movie) => (
          <MovieCard
            key={movie.id}
            image={
              movie.poster_path
                ? imageBaseUrl + posterSize + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            release_date={movie.release_date}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setisLoading(true)} />
      )}
    </>
  );
};

export default Home;
