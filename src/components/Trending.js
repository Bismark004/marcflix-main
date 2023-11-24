import React, {useState, useEffect} from 'react';
import './Trending.css';
import tmdbApi from "../Api/tmdbApi.js";

function Trending ()  {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await tmdbApi.getMoviesList('popular');
                setTrendingMovies(response.results);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
        };

        fetchPopularMovies();
    }, []);
    return (
        <div className="trending">
            <div className="head">
                <h1>Trending</h1>
                <div> <span>See More <b> &gt;</b> </span></div>
               
            </div>
            <div className="grid-container">
                {trendingMovies.map((movie) => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>

                    </div>
                ))
                }
            </div>


        </div>
    )

}
export default Trending;