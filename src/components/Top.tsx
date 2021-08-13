import React, { useState, useEffect } from "react";
import MovieComponent from "./Movie";
import { MainBlock } from "../styles/Main";
import { MenuBlock } from "../styles/Menu";
import { Movies } from "../types/types";
import Header from "./Header";

const Top: React.FC<Movies> = (props) => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagenumber, setPagenumber] = useState(1);
  const [totalpages, setTotalpages] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a1279933de606b4374a2c93a1d0127a9&${pagenumber}`)
      .then(res => res.json())
      .then(({ total_pages, results }) => {
        setMovies(results);
        console.log(results);
      })
      .catch(err => console.log(err))
    setLoading(false);
  }, []);



  return (
    <MainBlock>
      <Header handleChange={props.handleChange} handleSubmit={props.handleSubmit} />
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
              </MenuBlock>
          )
        }
      </MenuBlock>
    </MainBlock>
  )
};

export default Top;
