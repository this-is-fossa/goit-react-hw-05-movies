import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_IMG_URL, fetchMovieCast } from 'services/MoviesAPI';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(response => setCast(response.data.cast));
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast?.map(actor => {
          return (
            <li key={actor.id}>
              <div>
                {actor.profile_path ? (
                  <img
                    src={`${BASE_IMG_URL}w300${actor.profile_path}`}
                    alt="Actor poster"
                  />
                ) : (
                  'Not found photo'
                )}
              </div>
              <div>
                <h5>Name:{actor.name}</h5>
                <h5>Role:{actor.character}</h5>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
