import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../services/MoviesAPI';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  const getTrendMovies = async () => {
    try {
      await fetchTrendingMovies().then(res => setMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrendMovies();
  }, []);

  return (
    <main>
      <div>
        <h2>Trending today</h2>
        <ul>
          {movies?.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
