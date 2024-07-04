import { useState, useEffect} from 'react';
import useCoffeeService from '../../services/coffee-service';

import Banner from '../banner/banner';
import AboutOur from '../about-our/about-our';
import CoffeeSearch from '../coffee-search/coffee-search';
import CoffeeFilter from '../coffee-filter/coffee-filter';
import CoffeeList from '../coffee-list/coffee-list';
import Footer from '../footer/footer';

import imgBg from '../../resources/img/our_coffee/about_our_coffee.jpeg';


import './our-coffee.scss';

const OurCoffee = () => {
    const [originalCoffeeList, setOriginalCoffeeList] = useState([]);
    const [filteredCoffeeList, setFilteredCoffeeList] = useState([]);
    const {getAllCoffee, loading, error} = useCoffeeService();


    useEffect(() => {
        getAllCoffee()
            .then((data) => {
                setOriginalCoffeeList(data);
                setFilteredCoffeeList(data);
            })
    }, [])
    const handleFilter = (country) => {
        const filteredList = originalCoffeeList.filter(item => country === null || item.country === country);
        setFilteredCoffeeList(filteredList);
    };

    const handleSearch = (searchText) => {
        const formattedSearchText = searchText.replace(/\s/g, '');
        const filteredList = originalCoffeeList.filter(item =>
            item.title.toLowerCase().includes(searchText.toLowerCase()) || item.country.toLowerCase().includes(searchText.toLowerCase()) || item.price.toString().replace(/\s/g, '').includes(formattedSearchText)
        );
        setFilteredCoffeeList(filteredList);
    };

    const resetFilters = () => {
        setFilteredCoffeeList(originalCoffeeList);
    };

    return (
        <div className="ourcoffee">
            <Banner title='Our Coffee' />
            <AboutOur img={imgBg} title='About our beans' description='Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
            As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.' />
            <div className="ourcoffee_wrapper">
                <CoffeeSearch handleSearch={handleSearch} />
                <CoffeeFilter handleFilter={handleFilter} resetFilters={resetFilters} />
            </div>
            <CoffeeList coffeeList={filteredCoffeeList} loading={loading} error={error} />
            <Footer />
        </div>
    )
}

export default OurCoffee;