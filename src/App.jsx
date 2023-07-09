import './App.css';
import Main from '../src/Components/Main/Main';
import Footer from '../src/Components/Footer/Footer';
import Head from './Components/Header/Head';
import MovieInfo from '../src/Components/MovieInfo/MovieInfo';
import Movie from '../src/Components/Movie/Movie';

import { useState } from 'react';
import Axios from 'axios';

export const API_KEY = 'cefe59e8';

function App() {
  const [searchQuery, updateSearchQuery] = useState('');

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect('');
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    <>
      <Head />
      <Main searchQuery={searchQuery} onTextChange={onTextChange} />

      {selectedMovie && (
        <MovieInfo
          selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect}
        />
      )}
      <div className='movie-list-container'>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <Movie key={index} movie={movie} onMovieSelect={onMovieSelect} />
          ))
        ) : (
          <div className='load'></div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
