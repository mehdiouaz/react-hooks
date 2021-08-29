import React from "react";
import ReactStars from "react-rating-stars-component";

function MovieCard(props) {
  return (
    <div className="MovieCard" style={{ width: 200, padding: 5 }}>
      <img className="MoviePoster" src={props.posterURL} />
      <ReactStars classNames="rating" value={props.rating} count={10} />
      <div className="Title">{props.Title}</div>
      <div className="Bio">
        <h4>Description</h4>
        {props.Description}
      </div>
    </div>
  );
}

export default MovieCard;
