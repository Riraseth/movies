import { Link } from 'react-router-dom';

const Breadcrumb = ({ movieTitle }) => (
  <div className="breadcrumb">
    <div className="breadcrumb__content">
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </div>
  </div>
);

export default Breadcrumb;
