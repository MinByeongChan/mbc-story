export interface Movie {
  imdbID: string;
  Title: string;
}

export const fetchMovies = async (title: string): Promise<Movie[]> => {
  const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${title}`);
  const { Search } = await res.json();
  return Search;
};
