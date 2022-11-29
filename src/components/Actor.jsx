const Actor = ({ name, character, image }) => (
  <div className="actor">
    <img className="actor__thumbnail" src={image} />
    <h3 className="actor__name">{name}</h3>
    <p className="actor__character">{character}</p>
  </div>
);

export default Actor;
