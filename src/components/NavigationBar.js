import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (
            <header>
                <div class="netflixLogo">
                    <a id="logo" href="#home"><img src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Logo Image" /></a>
                </div>      
                <nav class="main-nav">    
                    <Link to="/">Home</Link>
                    <Link to="/genre/action">Action</Link>
                    <Link to="/genre/comedies">Comedies</Link>
                    <Link to="/genre/dramas">Dramas</Link>
                    <Link to="/genre/kids">Kids</Link>
                    <Link to="/genre/scifi">Sci-Fi</Link>
                </nav>
                <nav class="sub-nav">
                    <input class="search-box"></input>
                    <a href="#"><i class="fas fa-search sub-nav-logo"></i></a>
                </nav>      
            </header>
        )
    };
};

export default NavigationBar;