import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useCoffeeService from '../../services/coffee-service';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../error-message/error-message';
import divider from '../../resources/icons/beans_logo_black.svg';
import './about-it.scss';

const AboutIt = () => {
    const {coffeeId} = useParams();
    const [coffeeList, setCoffeeList] = useState([]);
    const [coffee, setCoffee] =useState(null);
    const {loading, error, getAllCoffee} = useCoffeeService();

    useEffect(() => {
        getAllCoffee()
            .then((data) => {
                setCoffeeList(data);
                const foundCoffee = data.find(item => item.id === coffeeId);
                if (foundCoffee) {
                    setCoffee(foundCoffee);
                }
            })
    }, [coffeeId])
    

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(error || loading || !coffee) ? <View coffee={coffee} /> : null;

    return (
        <div className="aboutit">
            <div className="container">
                {errorMessage}
                {spinner}
                {content}
            </div>
        </div>
    )
}

const View = ({coffee}) => {
    const {img, altimg, title, descr, price, country} = coffee;

    return (
        <div className="aboutit_wrapper">
            <img src={img} alt={altimg} className='aboutit_img' />
            <div className="aboutit_block">
                <div className="aboutit_title">{title}</div>
                <img src={divider} alt="divider" className="aboutit_divider" />
                <div className="aboutit_text">Country: {country}</div>
                <div className="aboutit_text">{descr}</div>
                <div className="aboutit_price">Price: {price} P.</div>
            </div>
        </div>
    )
}

export default AboutIt;