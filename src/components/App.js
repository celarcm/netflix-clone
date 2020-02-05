import React from 'react';
import NavigationBar from './NavigationBar';
import CategoriesList from './CategoriesList';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="wrapper">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Route key="root-navigation" path="/" component={NavigationBar} />
                <Route key="root-categories" path="/" exact component={CategoriesList} />
                <Route key="genre" path="/genre/:genreId/:genreName" component={CategoriesList} />
                <Route key="search" path="/search/:searchTerm" component={CategoriesList} />
            </BrowserRouter>
        </div>
    );
};

export default App;