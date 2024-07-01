import './coffee-search.scss';

const CoffeeSearch = () => {
    return (
        <div className="search">
            <div className="search_title">Lookiing for</div>
            <input 
                type="text" 
                placeholder='start typing here...' 
                className='search_input' 
            />
        </div>
    )
}

export default CoffeeSearch;