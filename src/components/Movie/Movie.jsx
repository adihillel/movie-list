import React from "react";
import "./Movie.css";

function Movie(props) {
  return (
    <div className="movie-card">
      <div className="pic-container">
        <img className="movie-pic" src={props.movie.image} />
      </div>
      <div className="movie-details">
        <p>Title:{props.movie.title}</p>
        <p>Rating:{props.movie.rating}</p>
        <p>Year:{props.movie.releaseYear}</p>
        <p>Genre:</p>
        <div className="movie-genre">
          <ul>
            {props.movie.genre.map((g, i) => {
              return <li key={i}>{g}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Movie;
