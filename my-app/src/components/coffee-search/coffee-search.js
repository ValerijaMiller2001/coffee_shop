import { useState } from 'react';

import './coffee-search.scss';

const CoffeeSearch = ({handleSearch}) => {
    const [searchText, setSearchText] = useState('');

    const handleChange = (event) => {
        const text = event.target.value;
        setSearchText(text);
        handleSearch(text);
    };

    return (
        <div className="search">
            <div className="search_title">Lookiing for</div>
            <input 
                type="text" 
                placeholder='start typing here...' 
                className='search_input' 
                value={searchText}
                onChange={handleChange}
            />
        </div>
    )
}

export default CoffeeSearch;