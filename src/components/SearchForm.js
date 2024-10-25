// components/SearchForm.js
import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(input);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Transaction Hash or Wallet Address"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
