import Header from '../header/header';
import logo from '../../resources/icons/logo.png'
import './banner.scss';

const Banner = ({title}) => {
    return (
        <div className="banner">
            <Header clazzLink='header_link_white' logo={logo} clazzBlock='header' />
            <div className="container">
                <div className="banner_title">{title}</div>
            </div>
        </div>
    )
}

export default Banner;