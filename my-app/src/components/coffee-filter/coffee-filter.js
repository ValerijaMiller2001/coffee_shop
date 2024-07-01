import './coffee-filter.scss';

const CoffeeFilter = ({handleFilter}) => {
    const countries = [
        {index: 0, country: "Швеция"},
        {index: 1, country: "Италия"},
        {index: 2, country: "Германия"},
        {index: 3, country: "Швейцария"},
        {index: 4, country: "Латвия"},
        {index: 5, country: "Россия"}
    ];

    const buttons = countries.map(({country, index}) => {
        return (
            <button className="filter_btn" key={index} onClick={() => handleFilter(country)}>{country}</button>
        )
    })
    const handleResetFilter = () => {
        handleFilter(null);
    };
    return (
        <div className="filter">
            {buttons}
            <button className='filter_btn filter_btn_reset' onClick={handleResetFilter}>Сбросить</button>
        </div>
    )
}

export default CoffeeFilter;