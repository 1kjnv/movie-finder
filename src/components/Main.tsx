import React, { useState, useEffect } from 'react';
import { Movies } from '../../types/types';
import MovieComponent from './Movie';
import Header from './Header';
import { MenuBlock } from '../styles/Menu';
import { Pagination } from '../styles/Pagination';

const Main: React.FC<Movies> = () => {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
	const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
	const [loading, setLoading] = useState(false);

  async function searchMovies() {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=a1279933de606b4374a2c93a1d0127a9&query=${query}&page=${pageNumber}`)
      .then(res => res.json())
      .then(({ total_pages, results }) => {
        setMovies(results);
        setTotalPages(total_pages);
      })
      .catch(err => console.log(err))
    setLoading(false);
  };

  const goPrev = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const goNext = () => {
    setPageNumber(Math.min(totalPages, pageNumber + 1));
    console.log(pageNumber);
  };

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await searchMovies();
  }

  return (
    <>
      <Header handleChange={handleChange} handleSubmit={handleSubmit} query={query} />
      
      <MenuBlock>
        {
          loading ? (
            <p>Loading...</p>
          ) : (
              movies &&
              <MenuBlock>
                {
                  movies.map(movie => (
                    <MovieComponent movie={movie} key={movie.id} />
                  ))
                }
                {
                  totalPages > 1 ? (
                    <div>
                      <button onClick={goPrev}>Prev</button>
                      <button onClick={goNext}>Next</button>
                    </div>
                  ) : (null)
                }
              </MenuBlock>
          )
        }
      </MenuBlock>
    </>
  );
};

export default Main;
