import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMoviesByGenre } from '../actions';

class Category extends React.Component {
    render() {
        if (this.props.genre) {
            return (
                <div>
                    <h1 id="home">{this.props.title}</h1>
                    <div class="box">
                        {this.renderImages()}
                    </div>
                </div> 
            )
        } else {
            return (
                <div>
                    <h1 id="home">{this.props.title}</h1>
                    <div class="box">
                        Loading...
                    </div>
                </div> 
            )
        }
    };

    renderImages() {
        console.log('this.props.movies', this.props.movies);
        return this.props.genre.movies.map(movie => {
            console.log('movie', movie);
            return (
                <Link to={`movie/${movie.id}`} ><img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></Link>
            )
        })
    };

    componentDidMount() {
        this.props.fetchMoviesByGenre(this.props.genreId);
    }
};


const mapStateToProps = (state, ownProps) => {
    return { genre: state.genreMovies.find(genre => genre.genreId === ownProps.genreId) }
}

export default connect(
    mapStateToProps,
    {fetchMoviesByGenre}
)(Category);