import omdbApiWithResults from '../mocks/omdb-api-data-response/with-results.json';

export function useFilms () {
  const films = omdbApiWithResults.Search;

  /** Isolate API contract and components data.
   * - Useful if the API changes
   * - On changes, the new data is controlled here and not inside each component
  */
  const mappedFilms = films?.map(film => ({
    id: film.imdbID,
    title: film.Title,
    year: film.Year,
    poster: film.Poster
  }));

  return { films: mappedFilms };
}
