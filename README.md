# React Film Archive

Film Archive using React hooks like `useMemo`, `useCallback` and `useRef`

## The reason behind this project

This project comes from `Midudev's React Crash Curse` on YouTube:

- [Technical Test. Learn useMemo, useCallback y useRef
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
