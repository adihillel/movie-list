import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "./MovieList.css";
import { movieData } from "../../data";

function MovieList() {
  const [isSorted, setIsSorted] = useState(false);
  // const [data, setData] = useState([]);

  // const fetchDataFromApi = () => {
  //   fetch("https://api.androidhive.info/json/movies.json", {
  //     mode: "no-cors",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   })
  //     .then((response) =>response.json())
  //     .then((data) =>setData(data))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   fetchDataFromApi();
  // }, []);

  const clickSortBtn = () => {
    if (!isSorted) {
      setIsSorted(true);
      movieData.sort((a, b) => {
        return b.rating - a.rating;
      });
    }
  };

  return (
    <div className="container">
      <div>
        <button className="btn" onClick={clickSortBtn}>
          sort
        </button>
      </div>
      {movieData.map((movie, i) => {
        return <Movie movie={movie} index={i} key={i} />;
      })}
    </div>
  );
}

export default MovieList;
