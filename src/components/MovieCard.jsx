import { Link } from 'react-router-dom';
import GoldStar from '../images/gold_star.svg';

const MovieCard = ({ image, movieId, title, rating, release_date }) => (
  <div className="movie-card">
    <Link to={`/${movieId}`}>
      <div className="movie-card__inner">
        <div className="movie-card__front">
          <img className="movie-card__img" src={image} />
          <div className="movie-card__footer">
            <h4 className="movie-card__title movie-card__title--front">
              {title}
            </h4>
          </div>
        </div>
        <div className="movie-card__back">
          <img className="movie-card__img movie-card__img--back" src={image} />
          <div className="movie-card__text">
            <h2 className="movie-card__title movie-card__title--back">
              {title}
            </h2>
            <p className="movie-card__release-date">
              Release date:
              <br />
              {release_date}
            </p>
          </div>

          <div className="movie-card__footer">
            <h4 className="movie-card__rating">Rating: </h4>
            <img className="movie-card__rating-img" src={GoldStar} />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default MovieCard;
