import React, { useState, useEffect } from 'react';
import { Movies } from '../../types/types';
import MovieComponent from './Movie';
import Header from './Header';

const Main = () => {

  const [movies, setMovies] = useState<Movies>([]);
	const [totalPages, setTotalPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a1279933de606b4374a2c93a1d0127a9&page=${pageNumber}`)
      .then(res => res.json())
      .then(({ total_pages, results }) => {
        setMovies(results);
        setTotalPages(total_pages);
      })
      .catch(err => console.log(err))
    setLoading(false);
  }, [pageNumber]);

  const goPrev = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const goNext = () => {
    setPageNumber(Math.min(totalPages, pageNumber + 1));
  }

  return (
    <>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        movies.map(m => (
          <MovieComponent movie={m} key={m.id} />
        ))
      )}

      <div>
        <button onClick={goPrev}>Prev</button>
        <button onClick={goNext}>Next</button>
      </div>
    </>
  );
};

export default Main;
