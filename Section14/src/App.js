import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchMovieHandler = useCallback(async ()=>{
    setLoading(true);
    fetch('https://reacthttp-82415-default-rtdb.firebaseio.com/movies.json').then(response => {
      return response.json();
    }).then(data => {
      const transformedMovies = data.results.map(movie => (
        {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date
        }
      ));
      setMovies(transformedMovies);
      setLoading(false);
    }).catch(()=>{
      alert('Erro encontrado  ');
    });
  }, []);

  useEffect(()=>{
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {loading && <p>Loading...</p>}
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
