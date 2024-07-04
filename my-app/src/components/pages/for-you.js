import { useState, useEffect} from 'react';
import useCoffeeService from '../../services/coffee-service';

import Banner from "../banner/banner";
import AboutOur from "../about-our/about-our";
import CoffeeList from "../coffee-list/coffee-list";
import Footer from "../footer/footer";
import img from '../../resources/img/pleasure_about.png';

const ForYou = () => {
    const [coffeeList, setCoffeeList] = useState([]);
    const {getAllCoffee, loading, error} = useCoffeeService();

    useEffect(() => {
        getAllCoffee()
            .then((data) => {
                setCoffeeList(data);
            })
    }, [])

    return (
        <>
            <Banner title='For your pleasure' />
            <AboutOur 
            img={img} 
            title='About our goods' 
            description='Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
            As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.' />
            <CoffeeList coffeeList={coffeeList} loading={loading} error={error} />
            <Footer />
        </>
    )
}

export default ForYou;