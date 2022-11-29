import { useState, useEffect, useRef } from 'react';
import searchIcon from '../images/search_icon.svg';

const Search = ({ setSearchMovie }) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchMovie(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchMovie, state]);

  return (
    <div className="search">
      <div className="search__content">
        <img className="search__icon" src={searchIcon} />
        <input
          className="search__input"
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </div>
    </div>
  );
};

export default Search;
