const Grid = ({ header, children }) => (
  <main className="grid">
    <h1 className="grid__header">{header}</h1>
    <div className="grid__content">{children}</div>
  </main>
);

export default Grid;
