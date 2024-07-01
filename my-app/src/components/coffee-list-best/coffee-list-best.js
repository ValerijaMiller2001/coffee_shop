import {Link} from 'react-router-dom';
import './coffee-list-best.scss';
import coffeeItemOne from '../../resources/img/best/best_one.jpeg';
import coffeeItemTwo from '../../resources/img/best/best_two.jpeg';
import coffeeItemThree from '../../resources/img/best/best_three.jpeg';

const CoffeeListBest = () => {
    return (
        <div className='listbest'>
            <div className="container">
                <div className="listbest_title">Our best</div>
                <ul className="listbest_block">
                    <Link to='/aboutcoffee'>
                        <li className='listbest_item' >
                            <img src={coffeeItemOne} alt="img" className='listbest_item_img' />
                            <div className='listbest_item_title'>Solimo Coffee Beans 2 kg</div>
                            <div className='listbest_item_price'>10.73$</div>
                        </li>
                    </Link>
                    <Link to='/aboutcoffee'>
                        <li className='listbest_item'>
                            <img src={coffeeItemTwo} alt="img" className='listbest_item_img' />
                            <div className='listbest_item_title'>Presto Coffee Beans 1 kg</div>
                            <div className='listbest_item_price'>15.99$</div>
                        </li>
                    </Link>
                    <Link to='/aboutcoffee'>
                        <li className='listbest_item'>
                            <img src={coffeeItemThree} alt="img" className='listbest_item_img' />
                            <div className='listbest_item_title'>AROMISTICO Coffee 1 kg</div>
                            <div className='listbest_item_price'>6.99$</div>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
export default CoffeeListBest;