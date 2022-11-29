import calculateTime from '../helpers/calculateTime';
import convertMoney from '../helpers/convertMoney';

const MovieInfoBar = ({ time, budget, revenue }) => (
  <div className="info-bar">
    <div className="info-bar__content">
      {time > 0 && (
        <div className="info-bar__column">
          <p>Running time: {calculateTime(time)}</p>
        </div>
      )}
      {budget > 0 && (
        <div className="info-bar__column">
          <p>Budget: {convertMoney(budget)}</p>
        </div>
      )}
      {revenue > 0 && (
        <div className="info-bar__column">
          <p>Revenue: {convertMoney(revenue)}</p>
        </div>
      )}
    </div>
  </div>
);

export default MovieInfoBar;
