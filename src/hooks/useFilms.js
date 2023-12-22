import { useCallback, useRef, useState } from 'react';
import { searchFilms, mapFilms } from '../services/search-films';
import { Search } from '../mocks/omdb-api-data-response/with-results.json';
import { removeExtraWhiteSpaces } from '../utils/remove-white-spaces';

export function useFilms () {
  const [films, setFilms] = useState(mapFilms(Search));
  const [filmsError, setFilmsError] = useState(null);
  const [loading, setLoading] = useState(false);
  const previousQuery = useRef('');

  const getFilms = useCallback(async filmQuery => {
    /** Removes any space */
    const clearedFilmQuery = removeExtraWhiteSpaces(filmQuery);

    // Avoiding repeated queries
    if (previousQuery.current === clearedFilmQuery) return;
    previousQuery.current = clearedFilmQuery;

    setLoading(true);

    const response = await searchFilms(clearedFilmQuery);

    if (typeof response === 'string') {
      setFilms([]);
      setFilmsError(response);
    } else {
      setFilms(await searchFilms(clearedFilmQuery));
      setFilmsError(null);
    }

    setLoading(false);
  }, []);

  return { films, getFilms, filmsError, loading };
}
