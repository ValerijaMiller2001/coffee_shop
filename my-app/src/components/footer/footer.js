import Header from '../header/header';
import logoImg from '../../resources/icons/logo_black.png';
import divider from '../../resources/icons/beans_logo_black.svg';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <Header clazzLink='header_link_black' logo={logoImg} clazzBlock='footer_nav' />
                <img src={divider} alt="divider" className='footer_divider' />
            </div>
        </div>
    )
}

export default Footer;