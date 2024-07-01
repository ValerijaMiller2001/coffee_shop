import './about-our.scss';
import divider from '../../resources/icons/beans_logo_black.svg';

const AboutOur = ({img, title, description}) => {
    return (
        <div className="aboutour">
            <div className="container">
                <div className="aboutour_wrapper">
                    <img src={img} alt='rr' className="aboutour_img" />
                    <div className="aboutour_block">
                        <div className="aboutour_title">{title}</div>
                        <img src={divider} alt="divider" className="aboutour_divider" />
                        <div className="aboutour_descr">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutOur;