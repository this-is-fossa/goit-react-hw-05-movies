import { fetchSearchMovies } from 'services/MoviesAPI';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movieList, setMovieList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams('');

  const currentQuery = searchParams.get('query') ?? '/movies';
  const location = useLocation();

  const getSearchMovies = async currentQuery => {
    try {
      await fetchSearchMovies(currentQuery).then(res =>
        setMovieList(res.data.results)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentQuery === '') {
      return;
    }
    getSearchMovies(currentQuery);
  }, [currentQuery]);

  const onQueryChange = newQuery => {
    if (newQuery === currentQuery) {
      return alert('This film already found');
    }
    if (newQuery === '') {
      setMovieList([]);
      return;
    }
    setSearchParams({ query: newQuery });
  };

  return (
    <>
      <SearchBar onChangeQuery={onQueryChange} />
      <div>
        <ul>
          {movieList?.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                  key={movie.id}
                >
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
