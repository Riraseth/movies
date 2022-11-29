import GoldStar from '../images/gold_star.svg';

const HeroImage = ({
  image,
  title,
  text,
  rating,
  release_date,
  vote_count,
}) => (
  <div className="hero" style={{ backgroundImage: `url('${image}')` }}>
    <div className="hero__content">
      <div className="hero__text">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__description">{text}</p>
        <div className="hero__info">
          <p>Release date: {release_date}</p>
          <p className="hero__rating">
            Rated:
            <img className="hero__star" src={GoldStar} />
            {rating}
            <span className="hero__rating-info">
              out of 10 with {vote_count} votes
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default HeroImage;
