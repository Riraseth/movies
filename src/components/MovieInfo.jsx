import { imageBaseUrl, posterSize, backdropSize } from '../config';
import NoImage from '../images/no_image.png';
import GoldStar from '../images/gold_star.svg';

const MovieInfo = ({ movie }) => (
  <div
    className="movie-info"
    style={{
      backgroundImage: `url('${imageBaseUrl}${backdropSize}${movie.backdrop_path}')`,
    }}
  >
    <div className="movie-info__content">
      <img
        src={
          movie.poster_path
            ? `${imageBaseUrl}${posterSize}${movie.poster_path}`
            : NoImage
        }
        className="movie-info__poster"
      />
      <div className="movie-info__text">
        <h1 className="movie-info__title">{movie.title}</h1>
        <p className="movie-info__overview">{movie.overview}</p>
        <div className="movie-info__directors">
          <div>
            <h3>RATING</h3>
            <div className="movie-info__rating">
              <img className="movie-info__star" src={GoldStar} />
              <span>{movie.vote_average.toFixed(2)}</span>
            </div>
          </div>
          <div className="movie-info__director">
            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
            {movie.directors.map((director) => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default MovieInfo;
