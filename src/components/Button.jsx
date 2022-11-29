const Button = ({ text, callback }) => (
  <button className="btn" type="button" onClick={callback}>
    {text}
  </button>
);

export default Button;
