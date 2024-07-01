import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { MainPage, OurCoffee, AboutCoffee, ForYou } from '../pages';


import './app.scss';

const App = () => {
    return (
        <Router>
            <div className='app'>
                <Routes>
                    <Route path='/' element={<MainPage/>} />
                    <Route path='/ourcoffee' element={<OurCoffee/>} />
                    <Route path='/aboutcoffee/:coffeeId' element={<AboutCoffee/>} />
                    <Route path='/foryou' element={<ForYou/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App; 