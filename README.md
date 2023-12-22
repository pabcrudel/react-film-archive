# React Film Archive

Film Archive using React hooks like `useMemo`, `useCallback` and `useRef`

## The reason behind this project

This project comes from `Midudev's React Crash Curse` on YouTube:

- [Technical Test. Learn useMemo, useCallback and useRef
  (2:05:51)](https://www.youtube.com/watch?v=GOEiMwDJ3lc&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=5)
  - Title translated by me. The original is in spanish.

In this video he shows a Technical Test and he leverage the experience teaching
how to use the React hooks like `useMemo`, `useCallback` and `useRef`

## Technical Test Statement

Create an application to search for movies.

- API to use: - <https://www.omdbapi.com/>
  - Get the API Key on the website by registering your email.

Requirements:

- Needs to display an input for searching the movie and a button to perform the
search.

- List the movies and display the title, year, and poster.

- Ensure that the form functions properly.

- Make the movies display in a responsive grid.

- Implement data fetching from the API.

First iteration:

- Prevent the same search from being performed twice in a row.

- Make the search happen automatically while typing.

- Avoid continuous searching while typing (debounce).

## Midudev's Technical Test Tips

### Use of CSS Frameworks Class Less

There are some CSS Frameworks that add some base styles to improve the
appearance of the page. He suggested two however he chose the first one:

- [Water.css](https://watercss.kognise.dev/)
- [Bolt.css](https://boltcss.com/)

### Store a Mock Api Response

He suggested to store in the project an API response
[with results](src/mocks/omdb-api-data-response/with-results.json) and
[without results](src/mocks/omdb-api-data-response/without-results.json). This
is useful to have an example of the responses and to use it to develop the
program without being sending request. As I'm using the free tier, I have a
daily limit of 1000 request.

### Isolate API contract and components data

Consist of create a new object with the same structure but different
variable names (the same or a new ones) and use them in the components or other
sections of the app.

```js
const mappedFilms = films.map(film => ({
  id: film.imdbID,
  title: film.Title,
  year: film.Year,
  poster: film.Poster
}));
```

If the API is changed, this allows you tu update the data
once regardless where the data is being used.

## Use of React hooks

### useRef

Creates a mutable reference that persists throughout the life cycle of the
component. It can store any value that can be mutated (an id, a DOM element, a
counter). The main benefit is that every time the value changes, the component
is not re-rendered. In other words, the value persists between renders.

### useMemo & useCallback

React Hooks like `useState`, `useRef` or `useEffect` will be executed onces, at
the beginning of the component or Custom Hook life cycle. However, any function
or calculated value that is declared inside the body will be re-created or
re-calculated. Furthermore, if that function is being used at any point of that
body, it will be re-executed too.

#### useMemo

To avoid that, React provides a new Hook: `useMemo`. It performs a `memoization`
of a given calculated value or function to optimize the component or Custom
Hook. The target will be executed on any given dependency change.

```js
const sortedFilms = useMemo(() => {
  return sort ?
    [...films].sort((a, b) => a.title.localeCompare(b.title)) :
    films
}, [sort, films])
```

#### useCallback

As I said before, on any render a function is destroyed and created. You can use
`useMemo` to avoid that. However, it's better to use `useCallback` because it's
implementation is easier and it uses `useMemo` under the hood.

> [Under the hood](https://en.wiktionary.org/wiki/under_the_hood): Beneath the
surface; in its internal workings.

```js
  // useMemo()

  const clearSearch = useMemo(() => {
    return () => {
      setSearchQuery('');
      setSearchError(null);
      isFirstInput.current = true;
    }
  }, []);
```

```js
  // useCallback()

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setSearchError(null);
    isFirstInput.current = true;
  }, []);
```

In this case, I wanted to render `clearSearch` once, at the beginning of the
life cycle. That't why there aren't any dependencies.

In conclusion, use `useMemo` with calculated values and `useCallback` with
functions.
