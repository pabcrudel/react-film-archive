import FilmForm from './components/FilmForm';
import FilmsHoarding from './components/FilmsHoarding';
import { useFilms } from './hooks/useFilms';

export default function App () {
  const { films } = useFilms();

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
