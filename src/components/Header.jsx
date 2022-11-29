import { Link } from 'react-router-dom';
import TMDBLogo from '../images/movie_database_logo.svg';

const Header = () => (
  <div className="header">
    <div className="header__content">
      <Link to="/">
        <p className="header__logo">Movies</p>
      </Link>
      <a href="https://www.themoviedb.org/">
        <img className="header__tmdb-logo" src={TMDBLogo} />
      </a>
    </div>
  </div>
);

export default Header;
