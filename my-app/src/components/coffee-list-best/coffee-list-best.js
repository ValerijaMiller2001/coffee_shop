import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import useCoffeeService from '../../services/coffee-service';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../error-message/error-message';
import './coffee-list-best.scss';

const CoffeeListBest = () => {
    const [bestCoffeeList, setBestCoffeeList] = useState([]);
    const {getAllCoffee, loading, error} = useCoffeeService();

    useEffect(() => {
        getAllCoffee()
            .then((data) => {
                const bestCoffee = data.filter(item => item.best === true);
                setBestCoffeeList(bestCoffee);
            })
    }, [])


    function renderItems(arr) {
        const items = arr.map((item) => {
            return (
                <li className='listbest_item' key={item.id} >
                    <Link to={`/aboutcoffee/${item.id}`}>
                        <img src={item.img} alt={item.altimg} className='listbest_item_img' />
                        <div className='listbest_item_title'>{item.title}</div>
                        <div className='listbest_item_price'>{item.price} P.</div>
                    </Link>
                </li>
            )
        })
        return (
            <ul className="listbest_block">
                {items}
            </ul>
        )
    }

    const items = renderItems(bestCoffeeList);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;

    return (
        <div className='listbest'>
            <div className="container">
                <div className="listbest_title">Our best</div>
                {errorMessage}
                {spinner}
                {items}
            </div>
        </div>
    )
}
export default CoffeeListBest;