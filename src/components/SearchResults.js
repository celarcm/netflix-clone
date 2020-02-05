import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchMovies } from '../actions';

class Category extends React.Component {
    render() {
        if (this.props.searchResults && this.props.searchResults.length !== 0) {
            return (
                <div>
                    <h1 id="home">Search results</h1>
                    <div class="box">
                        {this.renderImages()}
                    </div>
                </div> 
            )
        } else {
            return (
                <div>
                    <h1 id="home">Search results</h1>
                    <div class="box">
                        Loading...
                    </div>
                </div> 
            )
        }
    };

    renderImages() {
        return this.props.searchResults.map(movie => {
            return (
                <Link to={`movie/${movie.id}`} ><img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} /></Link>
            )
        })
    };

    componentDidMount() {
        this.props.searchMovies(this.props.searchTerm);
    }
};


const mapStateToProps = (state) => {
    return { searchResults: state.searchResults }
}

export default connect(
    mapStateToProps,
    {searchMovies}
)(Category);