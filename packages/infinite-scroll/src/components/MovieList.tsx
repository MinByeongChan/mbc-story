import { useEffect, useState } from 'react';
import { fetchMovies, Movie } from '../fetchers/movies';

export const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetchMovies('avengers');
      setMovies(res);
    })();
  }, []);

  return (
    <div>
      <h2>Movie List!</h2>
      {movies.map((movie) => (
        <div key={movie.imdbID}>{movie.Title}</div>
      ))}
    </div>
  );
};
