import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/MoviesAPI';
import { MoviesItem, MoviesLink } from './Home.styled';

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
            <MoviesItem key={movie.id}>
              <MoviesLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </MoviesLink>
            </MoviesItem>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
