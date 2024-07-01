import {Link} from 'react-router-dom';
import Header from '../header/header';
import logo from '../../resources/icons/logo.png';
import divider from '../../resources/icons/beans_logo.svg';
import './main.scss';

const Main = () => {
    return (
        <div className='main'>
            <Header clazzLink='header_link_white' logo={logo} clazzBlock='header' />
            <div className="container">
                <h2 className='main_title'>Everything You Love About Coffee</h2>
                <img src={divider} alt="divider" className='main_divider' />
                <div className="main_subtitle">We makes every day full of energy and taste <br /> Want to try our beans?</div>
                <Link to='/ourcoffee'>
                    <div className="main_btn">More</div>
                </Link>
            </div>
        </div>
    )
}
export default Main;