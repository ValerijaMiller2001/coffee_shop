import {useState} from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../spinner/spinner';
import ErrorMessage from '../error-message/error-message';
import './coffee-list.scss';


const CoffeeList = ({coffeeList, loading, error}) => {
    const [visibleCoffee, setVisibleCoffee] = useState(4);


    const loadMoreItems = () => {
        setVisibleCoffee((items) => items + 4);
    };

    function renderItems(arr) {
        const items = arr.slice(0, visibleCoffee).map((item) => {
            return (
                <li className='list_item' key={item.id} >
                    <Link to={`/aboutcoffee/${item.id}`}>
                        <img src={item.img} alt={item.altimg} className='list_item_img' />
                        <div className='list_item_title'>{item.title}</div>
                        <div className='list_item_subtitle'>{item.country}</div>
                        <div className='list_item_price'>{item.price}P.</div>
                    </Link>
                </li>
            )
        })
        return (
            <div className="list_wrapper">
                {items}
            </div>
        )
    }

    const items = !error && !loading ? renderItems(coffeeList) : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const isLoadMoreActive = coffeeList.length > visibleCoffee;
    const showLoadMoreButton = isLoadMoreActive && visibleCoffee < coffeeList.length;
    return (
        <div className="list">
            <div className="container">
                {errorMessage}
                {spinner}
                {items}
                {showLoadMoreButton && (
                    <button 
                        onClick={loadMoreItems} 
                        className="list_btn">
                            Load more
                    </button>
                )}
            </div>
        </div>
    )
}

export default CoffeeList;