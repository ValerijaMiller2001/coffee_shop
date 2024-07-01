import {Link} from 'react-router-dom'
import './header.scss';

const Header = ({clazzLink, logo, clazzBlock}) => {
    return (
        <div className={clazzBlock}>
            <div className="container">
                <nav>
                    <ul >
                        <li><img src={logo} alt="logo" className="header_logo" /></li>
                        <li>
                            <Link to='/' className={`header_link ${clazzLink}`}>Coffee house</Link>
                        </li>
                        <li>
                            <Link to='/ourcoffee' className={`header_link ${clazzLink}`}>Our coffee</Link>
                        </li>
                        <li>
                            <Link to='/foryou' className={`header_link ${clazzLink}`}>For your pleasure</Link>
                        </li>
                    </ul>
                </nav>
            </div>
           
        </div>
    )

}

export default Header;