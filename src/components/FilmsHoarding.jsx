import PropTypes from 'prop-types';

export default function FilmsHoarding ({ films, loading, filmsError }) {
  return (
    <article className='filmsHoarding'>
      <h2>Films Hoarding</h2>
      {
        loading
          ? <p>loading</p>
          : filmsError
            ? <p>{filmsError}</p>
            : <DisplayFilms films={films} />
      }
    </article>
  );
}

function DisplayFilms ({ films }) {
  return (
    <ul>
      {
        films.map(film => (
          <li key={film.id}>
            <section className='filmData'>
              <h3>{film.title}</h3>
              <p>{film.year}</p>
              <img
                src={film.poster}
                alt={`Poster of the film "${film.title}"`}
                crossOrigin='anonymous'
              />
            </section>
          </li>
        ))
      }
    </ul>
  );
}

// Declare `films` prop type once because is the same in both function
const filmsType = { films: PropTypes.array };
DisplayFilms.propTypes = filmsType;
FilmsHoarding.propTypes = {
  ...filmsType,
  loading: PropTypes.bool.isRequired,
  filmsError: PropTypes.string
};
