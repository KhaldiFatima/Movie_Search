import './Movie.css';

function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div
      className='movie-container'
      onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <img className='cover-image' src={Poster} alt={Title} />
      <span className='movie-name'>{Title}</span>
      <div className='flex flex-r flex-sb '>
        <span className='movie-info'>Year : {Year}</span>
        <span className='movie-info'>Type : {Type}</span>
      </div>
    </div>
  );
}
export default Movie;
