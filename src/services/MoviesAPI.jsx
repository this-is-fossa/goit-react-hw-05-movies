import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'f3e1ed456186eb8f418c2248d99e5eff';
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';

export const fetchTrendingMovies = async () =>
  await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY}&language=en-US`
  );

export const fetchMoviesById = async movieId =>
  await axios.get(`${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`);

export const fetchMovieReviews = async movieId =>
  await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
  );

export const fetchMovieCast = async movieId =>
  await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );

export const fetchSearchMovies = async movie =>
  await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${movie}`
  );
