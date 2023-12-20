import PropTypes from 'prop-types';

export default function FilmsHoarding ({ films }) {
  const hasFilms = Boolean(films?.length);

  return (
    hasFilms
      ? <DisplayFilms films={films} />
      : <DisplayError />
  );
}

function DisplayFilms ({ films }) {
  return (
    <article className='filmsHoarding'>
      <h2>Films Hoarding</h2>
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
    </article>
  );
}

function DisplayError () {
  return <h3>Film not found</h3>;
}

// Declare `films` prop type once because is the same in both function
const filmsType = { films: PropTypes.array.isRequired };
FilmsHoarding.propTypes = filmsType;
DisplayFilms.propTypes = filmsType;
