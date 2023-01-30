import { useState, useEffect } from 'react';
import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import { fetchMoviesById, BASE_IMG_URL } from 'services/MoviesAPI';
import { BackLink } from 'components/BackLink/BackLink';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const getMovieDetails = async movieId => {
    try {
      await fetchMoviesById(movieId).then(res => setMovie(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <main>
      <div>
        <BackLink to={backLinkHref}>Go back</BackLink>
        <div>
          <div>
            {movie.poster_path ? (
              <img
                src={`${BASE_IMG_URL}w300${movie.poster_path}`}
                alt={movie?.title}
              />
            ) : (
              'Photo not found'
            )}
          </div>
          <div>
            <h2>{movie?.title}</h2>
            <p>User Score: {Math.round(movie?.vote_average) * 10}%</p>
            <div>
              <h3>Overview</h3>
              <p>{movie?.overview}</p>
            </div>
            <div>
              <h3>Genres</h3>
              {movie.genres?.map(gen => {
                return <p key={gen.id}>{gen.name}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
      <h5>Additional Information</h5>
      <ul>
        <li>
          <NavLink to={`/movies/${movieId}/cast`} replace>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/review`} replace>
            Review
          </NavLink>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default MovieDetails;
