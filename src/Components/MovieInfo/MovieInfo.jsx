import { useEffect, useState } from 'react';
import Axios from 'axios';
import { API_KEY } from '../../App';
import './MovieInfo.css';

function MovieInfo(props) {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <div className='info-container'>
      {movieInfo ? (
        <>
          <img
            className='cover-image'
            src={movieInfo?.Poster}
            alt={movieInfo?.Title}
          />
          <div className='info-column'>
            <span className='movie-name'>
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </span>
            <span className='movie-info'>
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </span>
            <span className='movie-info'>
              Year: <span>{movieInfo?.Year}</span>
            </span>
            <span className='movie-info'>
              Language: <span>{movieInfo?.Language}</span>
            </span>
            <span className='movie-info'>
              Rated: <span>{movieInfo?.Rated}</span>
            </span>
            <span className='movie-info'>
              Released: <span>{movieInfo?.Released}</span>
            </span>
            <span className='movie-info'>
              Runtime: <span>{movieInfo?.Runtime}</span>
            </span>
            <span className='movie-info'>
              Genre: <span>{movieInfo?.Genre}</span>
            </span>
            <span className='movie-info'>
              Director: <span>{movieInfo?.Director}</span>
            </span>
            <span className='movie-info'>
              Actors: <span>{movieInfo?.Actors}</span>
            </span>
            {/* <span className='movie-info'>
              Plot: <span>{movieInfo?.Plot}</span>
            </span> */}
          </div>
          <span className='close' onClick={() => props.onMovieSelect()}>
            X
          </span>
        </>
      ) : (
        <div className='loader'></div>
      )}
    </div>
  );
}

export default MovieInfo;
