import React, { useEffect, useState } from "react";
import Movie from './components/Movie'

const F_API = "https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=86ce2867ef4899a816fe9faab9420414&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=86ce2867ef4899a816fe9faab9420414&query="; 

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [ movies, setMovies] = useState([]);

  const getMOvies = (API) => {
    fetch(API)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
  };

  useEffect(() => {
    getMOvies(F_API);
  }, []);


  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(searchTerm) {
      getMOvies(SEARCH_API + searchTerm);
      setSearchTerm(''); 
    }
  };
  

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <header>
          <input className="search" type="text" placeholder="Search..." value={searchTerm} onChange={handleOnChange} /> 
        </header>
      </form>
      <div className="movie-container">   
        {
          movies.map((movie) => (
            <Movie key={movie.id} {...movie}/> 
        ))}
      </div>
    </>

  );
}

export default App;
