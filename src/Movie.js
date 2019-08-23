import React from "react";
import PropTypes from "prop-types";

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

function Movie({ id, year, rating, genres, title, summary, poster }) {
  return (
    <div className="col-3">
      <div className="card mb-3">
        <img
          src={poster}
          className="card-img-top"
          alt={title}
          style={{ width: "100%", height: "15vw", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title text-truncate">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted text-small">
            {year} | {rating}/10
          </h6>
          {/* {genres.map((genre, index) => (
            <h6 key={index} className="card-subtitle text-muted text-small">
              {genre}
            </h6>
          ))} */}
          <p className="card-text">{summary.slice(0, 140)}...</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
