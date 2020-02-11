import React from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';

class MovieDetails extends React.Component {
    render() {
        if (this.props.movie) {
            return (
                <section class="main-container">
                    <div class="location" id="movie-details">
                        <h1 id="movie-title"><a onClick={() => {this.props.history.goBack()}}><i class="fa fa-arrow-left" aria-hidden="true"></i></a> {this.props.movie.original_title}</h1>
                        <div class="movie-details">
                            <div className="details-description">
                                <div>
                                    <b>Rating:</b> {this.props.movie.vote_average} ({this.props.movie.vote_count} votes)
                                </div>
                                <div>
                                    {this.props.movie.overview}
                                </div>
                                <div>
                                    <b>Runtime:</b> {this.props.movie.runtime} minutes
                                </div>
                                <button><i class="fa fa-play" aria-hidden="true"></i> Play</button>
                            </div>
                            <div className="details-image">
                                <img src={`https://image.tmdb.org/t/p/original/${this.props.movie.poster_path}`} alt={this.props.movie.original_title}/>
                            </div>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section class="main-container">
                    <div class="location" id="movie-details">
                        <h1 id="movie-title"><a onClick={() => {this.props.history.goBack()}}><i class="fa fa-arrow-left" aria-hidden="true"></i></a> {this.props.movieId}</h1>
                        <div class="box">
                            Loading ...
                        </div>
                    </div>
                </section>
            )
        }
    };

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.movieId);
    }
};


const mapStateToProps = (state, ownProps) => {
    return { movie: state.movies.find(movie => movie.id === Number(ownProps.match.params.movieId)) }
}

export default connect(
    mapStateToProps,
    {fetchMovie}
)(MovieDetails);