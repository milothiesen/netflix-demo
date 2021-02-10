import './Row.css';
import React, { useState, useEffect } from 'react';
import axios from './axios';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // run once when row loads
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        // the variable inside fetchData() is a dependency. you always has to pass the dependent variable into the array of fetchData()
        // here we are telling useEffect that we are using a variable outside of the useEffect block
        fetchData();
    }, [fetchUrl]);
    console.log(movies);

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row_posters'>
                {movies.map((movie) => (
                    <img
                        // adding key here boosts performance
                        key={movie.id}
                        className='row_poster'
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>

        // {/* container -> posters */}
    );
}

export default Row;
