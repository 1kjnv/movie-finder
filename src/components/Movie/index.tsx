import React from 'react';
import { MovieProps } from './interfaces';
import { Link } from 'react-router-dom';
import { MovieBlock } from './styled';

const DEFAULT_IMG =
  'https://media.gettyimages.com/photos/old-film-perforated-celluloid-picture-id155278297?s=2048x2048';
const ENDPOINT_IMG = `https://image.tmdb.org/t/p/w500/`;

function getImage(path: string) {
  if (!path) {
    return DEFAULT_IMG;
  }
  return `${ENDPOINT_IMG}/${path}`;
}

const MovieComponent = ({ id, title, poster_path }: MovieProps) => {
  return (
    <MovieBlock>
      <Link to={`/movie/${encodeURIComponent(id)}`}>
        <img src={getImage(poster_path)} alt="img" />
        <p>{title}</p>
      </Link>
    </MovieBlock>
  );
};

export default MovieComponent;
