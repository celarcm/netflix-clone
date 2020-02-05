import React from 'react';
import NavigationBar from './NavigationBar';
import CategoriesList from './CategoriesList';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Route path="/" component={NavigationBar} />
                <Route path="/" exact component={CategoriesList} />
                <Route path="/genre/:genreId" component={CategoriesList} />
                <Route path="/search/:searchTerm" component={CategoriesList} />
            </BrowserRouter>
        </div>
    );
};

export default App;