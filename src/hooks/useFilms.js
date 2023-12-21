import { useRef, useState } from 'react';
import { searchFilms, mapFilms } from '../services/search-films';
import { Search } from '../mocks/omdb-api-data-response/with-results.json';

export function useFilms () {
  const [films, setFilms] = useState(mapFilms(Search));
  const [filmsError, setFilmsError] = useState(null);
  const [loading, setLoading] = useState(false);
  const previousQuery = useRef('');

  async function getFilms (filmQuery) {
    // Avoiding repeated queries
    if (previousQuery.current === filmQuery) return;
    previousQuery.current = filmQuery;

    setLoading(true);

    const response = await searchFilms(filmQuery);

    if (typeof response === 'string') {
      setFilms([]);
      setFilmsError(response);
    } else {
      setFilms(await searchFilms(filmQuery));
      setFilmsError(null);
    }

    setLoading(false);
  }

  return { films, getFilms, filmsError, loading };
}
