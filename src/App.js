import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const SearchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  }
  
  useEffect(() =>{
    SearchMovies('Batman')
  },[])

  //44017add
  const API_URL = 'https://omdbapi.com?apikey=44017add';

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm} onChange={(e) => {
          setSearchTerm(e.target.value);
          }}/>
        <img src={SearchIcon} alt='search' onClick={() => SearchMovies(searchTerm)}/>

      </div>

      {
        movies?.length > 0 ? (
          <div className='container'>
          {movies.map((movie) => (<MovieCard movie={movie}/>)
          )}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
