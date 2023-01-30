import { useState, useEffect } from 'react';
import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import { fetchMoviesById, BASE_IMG_URL } from 'services/MoviesAPI';
import { BackLink } from 'components/BackLink/BackLink';
import {
  Wrapper,
  BackLinkWrap,
  CardMovie,
  CardImg,
  Img,
  MovieInfo,
  GenresInfo,
  GenreItem,
  AdditionalInfo,
} from './MovieDetails.styled';

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
      <Wrapper>
        <BackLinkWrap>
          <BackLink to={backLinkHref}>Go back</BackLink>
        </BackLinkWrap>
        <CardMovie>
          <CardImg>
            {movie.poster_path ? (
              <Img
                src={`${BASE_IMG_URL}w300${movie.poster_path}`}
                alt={movie?.title}
              />
            ) : (
              'Photo not found'
            )}
          </CardImg>
          <MovieInfo>
            <h2>{movie?.title}</h2>
            <p>User Score: {Math.round(movie?.vote_average) * 10}%</p>
            <div>
              <h3>Overview</h3>
              <p>{movie?.overview}</p>
            </div>
            <h3>Genres</h3>
            <GenresInfo>
              {movie.genres?.map(gen => {
                return <GenreItem key={gen.id}>{gen.name}</GenreItem>;
              })}
            </GenresInfo>
          </MovieInfo>
        </CardMovie>
        <AdditionalInfo>
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
        </AdditionalInfo>
      </Wrapper>
    </main>
  );
};

export default MovieDetails;
