import FilmForm from './components/FilmForm';
import omdbApiWithResults from './mocks/omdb-api-data-response/with-results.json';
import FilmsHoarding from './components/FilmsHoarding';

export default function App () {
  const films = omdbApiWithResults.Search;

  return (
    <>
      <header>
        <h1>React Film Archive</h1>
        <FilmForm/>
      </header>

      <main>
        <FilmsHoarding films={films} />
      </main>
    </>
  );
}
