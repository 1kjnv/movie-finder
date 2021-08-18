import React, { useState, useEffect } from 'react';
import { Movies } from '../types/types';
import MovieComponent, { MovieInSearch } from './Movie';
import Header from './Header';
import { MenuBlock } from '../styles/Menu';
import { Pagination } from '../styles/Pagination';
import { MainBlock } from '../styles/Main';
import { SearchBlock, ViewResultsBlock } from '../styles/Search';

const Main: React.FC<Movies> = () => {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
	const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
	const [loading, setLoading] = useState(false);

  const pages = new Array(totalPages).fill(null).map((v, i) => i);

  useEffect(() => {
    const moviesFromStorage = localStorage.getItem('movies');
    const queryFromStorage = localStorage.getItem('query');
    if(moviesFromStorage && queryFromStorage) {
      setMovies(JSON.parse(moviesFromStorage));
      setQuery(queryFromStorage);
    }
  }, [])

  async function fetchMovies() {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=a1279933de606b4374a2c93a1d0127a9&query=${query}&page=${pageNumber}`)
      .then(res => res.json())
      .then(({ total_pages, results }) => {
        setMovies(results);
        setTotalPages(total_pages);
        setQuery("");
      })
      .catch(err => console.log(err))
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=a1279933de606b4374a2c93a1d0127a9&query=${query}`)
      .then(res => res.json())
      .then(({ total_pages, results, page }) => {
        setMovies(results);
        setTotalPages(total_pages);
        setPageNumber(page);
        localStorage.setItem('movies', JSON.stringify(movies));
        localStorage.setItem('query', query);
        localStorage.setItem('pageNumber', page);
      })
      .catch(err => console.log(err))
    setLoading(false);
  }, [query]);

  const goPrev = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const goNext = () => {
    setPageNumber(Math.min(totalPages, pageNumber + 1));
  };

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetchMovies();
  };

  return (
    <MainBlock>
      <Header handleChange={handleChange} query={query} />

      { query ? (
          <SearchBlock>
            {movies && movies.slice(0, 3).map(movie => (
              <MovieInSearch movie={movie} key={movie.id} />
            ))}
            <ViewResultsBlock>
              <input type="submit" value="View All Results" onClick={handleSubmit} />
            </ViewResultsBlock>
          </SearchBlock>
        ) : (
          <>
            {movies && movies.map(movie => (
              <MovieComponent movie={movie} key={movie.id} />
            ))}
          </>
        )
      }
    </MainBlock>
  );
};

export default Main;
