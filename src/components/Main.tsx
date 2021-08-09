import React, { useState, useEffect } from 'react';
import { Movies } from '../../types/types';

import { Link } from 'react-router-dom';

const Main = () => {

  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movies>([]);
	const [totalPages, setTotalPages] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(false);

  async function fetchMovies() {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=a1279933de606b4374a2c93a1d0127a9&query=${query}`)
      .then(res => res.json())
      .then(({ total_pages, results }) => {
        setMovies(results);
        setTotalPages(total_pages);
      })
      .catch(err => console.log(err))
    setLoading(false);
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if(!query) {
      console.log("You must type something");
    }

    await fetchMovies();
  }

  return (
    <>
      <div>
        <input type="text" onChange={handleQuery} value={query} />
        <br />
        <input type="submit" onClick={handleSubmit} value="Find" />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {movies.map(m => (
            <Link to={`/movie/${encodeURIComponent(m.id)}`} key={m.id}><p>{m.title}</p></Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Main;