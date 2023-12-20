export default function FilmForm () {
  return (
    <form className="filmForm">
      <label htmlFor="film">Enter a film name</label>
      <input
        type="text"
        id="film"
        placeholder="Harry Potter, Star Wars..."
      />
      <input type="submit" value="Search" />
    </form>
  );
}
