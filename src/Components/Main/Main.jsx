import SearchForm from '../SearchForm/SearchForm';
import './Main.css';

function Main({ searchQuery, onTextChange }) {
  return (
    <>
      <main className='header'>
        <div className='header-content flex flex-c '>
          <h2 className='header-title'>Find the movie you want.</h2>
          <br />
          <p className='header-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            quis, ipsa nostrum, doloribus debitis quia ullam facere nulla
            commodi magnam temporibus provident accusantium amet eveniet
            voluptatibus optio ducimus, pariatur illum!
          </p>
          <SearchForm searchQuery={searchQuery} onTextChange={onTextChange} />
        </div>
      </main>
    </>
  );
}

export default Main;
