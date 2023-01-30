import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/MoviesAPI';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const getMovieReviews = async movieId => {
    try {
      await fetchMovieReviews(movieId).then(res =>
        setReviews(res.data.results)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <div>
      <div>
        {reviews.length ? (
          reviews.map(review => {
            return (
              <div key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </div>
            );
          })
        ) : (
          <div>
            <p>We don't have any reviews for this movie</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
