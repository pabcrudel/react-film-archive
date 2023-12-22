import { getWithTTL, setWithTTL } from '../utils/storage-manager';

const ERROR_UNAUTHORIZED = '401';
const ERROR_TO_MANY_RESULTS = 'Too many results.';

export async function searchFilms (filmQuery) {
  try {
    if (!filmQuery) throw new Error('A film name must be provided');

    const storedFilms = getWithTTL(filmQuery);
    if (storedFilms?.length) return storedFilms;

    const films = await fetchingFilms(filmQuery);
    setWithTTL(filmQuery, films);

    return films;

  // Return a custom error message.
  } catch (error) {
    switch (error.message) {
      case ERROR_TO_MANY_RESULTS:
        return ERROR_TO_MANY_RESULTS + ' Try something more specific';
      case ERROR_UNAUTHORIZED:
        return 'Internal error. Try it later';
      default:
        return error.message;
    }
  }
}

/** Fetching films from OMDb API */
async function fetchingFilms (filmQuery) {
  const response = await fetch(
    'https://www.omdbapi.com/?' +
    `apikey=${import.meta.env.VITE_OMBD_API_KEY}` +
    `&s=${filmQuery}`
  );

  // Returns the status of the error as a string
  if (!response.ok) throw new Error(response.status);

  // Parse the response if the response is ok
  const result = await response.json();

  /* This API returns 200 even if there is an error.
  * - For example: "Too many results."
  */
  if (result.Response === 'False') throw new Error(result.Error);

  return mapFilms(result.Search);
}

/** Isolate API contract and components data.
 * - Useful if the API changes
 * - On changes, the new data is controlled here and not inside each component
*/
export function mapFilms (films) {
  return films.map(film => ({
    id: film.imdbID,
    title: film.Title,
    year: film.Year,
    poster: film.Poster
  }));
}
