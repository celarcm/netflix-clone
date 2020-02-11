import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null
        }
    }
    handleSubmit(e) {
        if (e.key === 'Enter') {
            console.log('Pressed Enter in search,', e.target.value);
            this.setState({
                redirect: `/search/${e.target.value}`
            });
        }
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        } else {
            return (
                <header>
                    <div class="netflixLogo">
                        <a id="logo" href="#home"><img src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="" /></a>
                    </div>      
                    <nav class="main-nav">    
                        <Link to="/">Home</Link>
                        <Link to="/genre/28/Action">Action</Link>
                        <Link to="/genre/35/Comedy">Comedy</Link>
                        <Link to="/genre/18/Drama">Drama</Link>
                        <Link to="/genre/10751/Family">Family</Link>
                        <Link to="/genre/878/SciFi">SciFi</Link>
                    </nav>
                    <nav class="sub-nav">
                        <input class="search-box" onKeyPress={this.handleSubmit.bind(this)}></input>
                        <a><i class="fas fa-search sub-nav-logo"></i></a>
                    </nav>      
                </header>
            )
        }
    };
};

export default NavigationBar;