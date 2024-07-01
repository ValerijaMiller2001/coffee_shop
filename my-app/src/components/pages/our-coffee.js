import { useState } from 'react';
import Banner from '../banner/banner';
import AboutOur from '../about-our/about-our';
import CoffeeSearch from '../coffee-search/coffee-search';
import CoffeeFilter from '../coffee-filter/coffee-filter';
import CoffeeList from '../coffee-list/coffee-list';
import Footer from '../footer/footer';

import imgBg from '../../resources/img/our_coffee/about_our_coffee.jpeg';


import './our-coffee.scss';

const OurCoffee = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleFilter = (country) => {
        setSelectedCountry(country);
    };


    return (
        <div className="ourcoffee">
            <Banner title='Our Coffee' />
            <AboutOur img={imgBg} title='About our beans' description='Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
            As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.' />
            <div className="ourcoffee_wrapper">
                <CoffeeSearch />
                <CoffeeFilter handleFilter={handleFilter} />
            </div>
            <CoffeeList selectedCountry={selectedCountry} />
            <Footer />
        </div>
    )
}

export default OurCoffee;