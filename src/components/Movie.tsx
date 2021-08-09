import React, { useState, useEffect } from 'react';
import { Movie } from '../../types/types';

const MovieComponent = (props: Movie) => {

  const [movie, setMovie] = useState<Movie>({});
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=a1279933de606b4374a2c93a1d0127a9`)
      .then(res => res.json())
      .then(res => setMovie(res))
      .catch(err => console.log(err))
    setLoading(false);
  }, [props.match.params.id]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{movie.title}</p>
      )}
    </>
  );
};

export default MovieComponent;