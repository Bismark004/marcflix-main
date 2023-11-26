import React, { useState, useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import './Trending.css'; // Import your existing styles

import tmdbApi from '../Api/tmdbApi.js';

function Trending() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const swiperContainer = useRef(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await tmdbApi.getMoviesList('popular');
        setTrendingMovies(response.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    if (swiperContainer.current) {
      // Initialize Swiper once movies are fetched
      const mySwiper = new Swiper(swiperContainer.current, {
        slidesPerView: 4, 
        spaceBetween: 16, 
      });
    }
  }, [trendingMovies]); 

  return (
    <div className="trending">
      <div className="head">
        <h1>Trending</h1>
        <div>
          <span>See More<b>&gt;</b></span>
        </div>
      </div>
      <div className="swiper-container" ref={swiperContainer}>
        <div className="swiper-wrapper">
          {trendingMovies.map((movie) => (
            <div key={movie.id} className="swiper-slide">
              <img
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                className="movie-image"
                alt={movie.title}
              />
            </div>
          ))}
        </div>
        {/* Add pagination, navigation, etc. if needed */}
      </div>
    </div>
  );
}

export default Trending;
