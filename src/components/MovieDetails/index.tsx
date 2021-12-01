import React, { useState, useEffect } from 'react';
import { Movie } from '../types/types';

const DEFAULT_IMG =
  'https://media.gettyimages.com/photos/old-film-perforated-celluloid-picture-id155278297?s=2048x2048';
const ENDPOINT_IMG = `https://image.tmdb.org/t/p/w500/`;

function getImage(path) {
  if (!path) {
    return DEFAULT_IMG;
  }
  return `${ENDPOINT_IMG}/${path}`;
}

const MovieDetails = (props: Movie) => {
  const [movie, setMovie] = useState<Movie>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=a1279933de606b4374a2c93a1d0127a9`,
    )
      .then((res) => res.json())
      .then((res) => setMovie(res))
      .catch((err) => console.log(err));
    setLoading(false);
  }, [props.match.params.id]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={getImage(movie.poster_path)} alt="img" />
          <p>{movie.title}</p>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
