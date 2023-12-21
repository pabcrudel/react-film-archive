import { useState, useRef, useEffect } from 'react';

export function useSearch () {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchError, setSearchError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = searchQuery === '';
      return;
    }

    if (searchQuery === '') {
      setSearchError('A film name must be provided');
      return;
    }

    setSearchError(null);
  }, [searchQuery]);

  function clearSearch () {
    setSearchQuery('');
    setSearchError(null);
    isFirstInput.current = true;
  }

  return { searchQuery, setSearchQuery, searchError, clearSearch };
}
