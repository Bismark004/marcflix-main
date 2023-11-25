import React, { useState, useEffect } from 'react';
import './Trending.css';
import tmdbApi from '../Api/tmdbApi.js';

function Trending() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    tmdbApi.getMoviesList('popular')
      .then(response => {
        setTrendingMovies(response.results);
      })
      .catch(error => {
        console.error('Error fetching popular movies:', error);
      });
  }, []);

  return (
    <div className="trending">
      <div className="head">
        <h1>Trending</h1>
        <div>
          <span>See More<b>&gt;</b></span>
        </div>
      </div>
      <div className="grid-container">
        {trendingMovies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
