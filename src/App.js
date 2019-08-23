import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
// import PropTypes from "prop-types"; // ES6

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const response = await axios.get(
      "https://yts.lt/api/v2/list_movies.json?sort_by=rating"
    );

    let movies = response.data.data.movies;

    this.setState({
      movies: movies,
      isLoading: false
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="container">
        <div className="row mt-3">
          {isLoading ? (
            <div className="col-12">
              <p>Loading...</p>
            </div>
          ) : (
            movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                rating={movie.rating}
                genres={movie.genres}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default App;
