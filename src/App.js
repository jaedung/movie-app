import React from "react";
import axios from "axios";
// import PropTypes from "prop-types"; // ES6

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const response = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json"
    );

    return response.data.movies;
  };

  componentDidMount() {
    console.log(this.getMovies());
  }

  render() {
    return (
      <div>
        {this.state.isLoading === true ? "Loading..." : "We are ready."}
      </div>
    );
  }
}

export default App;
