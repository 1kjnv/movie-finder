import React, { useState, useEffect } from 'react';
import { Movies } from './interfaces';
import MovieComponent from '../Movie';
import Header from '../Header';
import { MenuBlock } from './styled';
import { Pagination } from './styled';
import { MainBlock } from './styled';

const Main = () => {
  const [movies, setMovies] = useState<Movies>();
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

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=a1279933de606b4374a2c93a1d0127a9&query=${query}&page=${pageNumber}`)
      .then(res => res.json())
      .then(({ total_pages, results, page }) => {
        setMovies(results);
        setTotalPages(total_pages);
        setPageNumber(page);
        localStorage.setItem('movies', JSON.stringify(movies));
        localStorage.setItem('query', query);
        localStorage.setItem('pageNumber', page);
        console.log(`page: ${page}`);
        console.log(`total pages: ${total_pages}`);
      })
      .catch(err => console.log(err))
    setLoading(false);
  }, [query, pageNumber]);

  const goPrev = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const goNext = () => {
    setPageNumber(Math.min(totalPages, pageNumber + 1));
  };

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  return (
    <MainBlock>
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
                    <MovieComponent {...movie} key={movie.id} />
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
    </MainBlock>
  );
};

export default Main;
