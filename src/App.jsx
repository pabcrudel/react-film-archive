import FilmForm from './components/FilmForm';
import FilmsHoarding from './components/FilmsHoarding';
import { useFilms } from './hooks/useFilms';
import Footer from './components/Footer';

export default function App () {
  const { films, getFilms, filmsError, loading } = useFilms();

  return (
    <>
      <header>
        <h1>React Film Archive</h1>
        <FilmForm getFilms={getFilms}/>
      </header>

      <main>
        <FilmsHoarding
          films={films}
          loading={loading}
          filmsError={filmsError}
        />
      </main>

      <Footer repositoryName='react-film-archive'/>
    </>
  );
}
