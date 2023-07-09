import { FaSearch } from 'react-icons/fa';

import './SearchForm.css';

const SearchForm = ({ searchQuery, onTextChange }) => {
  return (
    <div className='search-form'>
      <div className='search-form-elem flex flex-sb bg-white'>
        <input
          type='text'
          className='form-control'
          placeholder='Search Movie ...'
          value={searchQuery}
          onChange={onTextChange}
        />
        <button type='submit' className='flex flex-c'>
          <FaSearch size={32} />
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
