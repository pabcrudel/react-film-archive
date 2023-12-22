import PropTypes from 'prop-types';
import { useSearch } from '../hooks/useSearch';
import debounce from 'just-debounce-it';
import { useRef } from 'react';

export default function FilmForm ({ getFilms }) {
  const { searchQuery, setSearchQuery, searchError, clearSearch } = useSearch();

  const handleSubmit = event => {
    event.preventDefault();
    const { filmQuery } = Object.fromEntries(
      new window.FormData(event.target)
    );
    getFilms(filmQuery);
  };

  const handleChange = event => {
    const searchQuery = event.target.value;
    setSearchQuery(searchQuery);

    debouncedGetFilms.current(searchQuery);
  };

  const debouncedGetFilms = useRef(
    debounce((searchQuery) => getFilms(searchQuery), 500)
  );

  const isClearDisabled = !searchQuery && !searchError;

  return (
    <>
      <section className="filmForm">
        <header>
          <form onSubmit={handleSubmit}>
            <input
              className='searchBar'
              required
              type="text"
              id="film"
              name="filmQuery"
              placeholder="Harry Potter, Star Wars, Interstellar..."
              value={searchQuery}
              onChange={handleChange}
            />
            <input type="submit" value="Search" disabled={!searchQuery} />
          </form>
          <button onClick={clearSearch} disabled={isClearDisabled}>
            Clear
          </button>
        </header>

        {
          searchError && (
            <footer>
              <p>{searchError}</p>
            </footer>
          )
        }
      </section>
    </>
  );
}

FilmForm.propTypes = { getFilms: PropTypes.func.isRequired };
