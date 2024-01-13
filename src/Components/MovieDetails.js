// MovieDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieDetails.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual OMDb API key
        const apiKey = '6312e224';
        const movieTitle = 'The Shawshank Redemption'; // Replace with the desired movie title
        const apiUrl = `http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;

        const response = await axios.get(apiUrl);
        setMovieDetails(response.data);
      } catch (err) {
        setError('Error fetching movie details');
      }
    };

    fetchMovieDetails();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movieDetails.Title}</h1>
      <div>
        <img src={movieDetails.Poster} alt={`${movieDetails.Title} Poster`} />
      </div>
      <button >Book Ticket</button>
      <p>{movieDetails.Plot}</p>
  <p> <strong>Director:</strong> {movieDetails.Director}</p>
  <p><strong>Actors:</strong> {movieDetails.Actors}</p>
  <p><strong>Genre:</strong> {movieDetails.Genre}</p>
  <p><strong>Release Date:</strong> {movieDetails.Released}</p>
  <p><strong>Runtime:</strong> {movieDetails.Runtime}</p>
  <p><strong>Rated:</strong> {movieDetails.Rated}</p>
  <p><strong>IMDb Rating:</strong> {movieDetails.imdbRating}</p>
  <p><strong>Metascore:</strong> {movieDetails.Metascore}</p>
  <p><strong>Awards:</strong> {movieDetails.Awards}</p>
  <p><strong>Language:</strong> {movieDetails.Language}</p>
  <p><strong>Country:</strong> {movieDetails.Country}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetails;
