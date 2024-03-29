import React, { useState, useEffect } from 'react';
import { Movies } from './interfaces';
import MovieComponent from '../Movie';
import Header from '../Header';
import { LoadingBlock, MenuBlock, Pagination, ErrorMessage } from './styled';
import { MainBlock } from './styled';

const Main = () => {
  const [movies, setMovies] = useState<Movies>();
  const [searchResults, setSearchResults] = useState<Movies>();
  const [query, setQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState<string>('popular');
  const [error, setError] = useState<string>('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://api.themoviedb.org/3/movie/${category}?api_key=a1279933de606b4374a2c93a1d0127a9&page=${pageNumber}`,
    )
      .then((res) => res.json())
      .then(({ total_pages, results, page }) => {
        setMovies(results);
        setTotalPages(total_pages);
        setPageNumber(page);
      })
      .catch((err) => setError(err))
      .then(() => setTimeout(() => setLoading(false), 1000));
  }, [category, pageNumber]);

  // set movie category on click
  const handleCategory = (e: string) => {
    console.log('set category to', e);
    setCategory(e);
  };

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetch(
        `http://api.themoviedb.org/3/search/movie?api_key=a1279933de606b4374a2c93a1d0127a9&query=${query}&page=${pageNumber}`,
      )
        .then((res) => res.json())
        .then(({ total_pages, page, results }) => {
          setSearchResults(results);
          setTotalPages(total_pages);
          setPageNumber(page);
        })
        .catch((err) => setError(err))
        .then(() => setTimeout(() => setLoading(false), 1000));
    }
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
  };

  if(error) {
    return (
      <ErrorMessage>
        <h4>{error}</h4>
      </ErrorMessage>
    )
  };
  return (
    <MainBlock>
      <MenuBlock>
        {loading ? (
          <LoadingBlock>
            <h4>Loading...</h4>
          </LoadingBlock>
        ) : searchResults ? (
          <MenuBlock>
            {searchResults.map((movie) => (
              <MovieComponent {...movie} key={movie.id} />
            ))}
            {totalPages > 1 ? (
              <div>
                <button onClick={goPrev}>Prev</button>
                <button onClick={goNext}>Next</button>
              </div>
            ) : null}
          </MenuBlock>
        ) : (
          <MenuBlock>
            {movies && movies.map((movie) => <MovieComponent {...movie} key={movie.id} />)}
            {totalPages > 1 ? (
              <Pagination>
                <button onClick={goPrev}>Prev</button>
                <button onClick={goNext}>Next</button>
              </Pagination>
            ) : null}
          </MenuBlock>
        )}
      </MenuBlock>
    </MainBlock>
  );
};

export default Main;
