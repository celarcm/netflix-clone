import {combineReducers} from 'redux';
import moviesByGenreReducer from './moviesByGenreReducer';
import moviesReducer from './moviesReducer';

export default combineReducers({ 
    genreMovies: moviesByGenreReducer,
    movies: moviesReducer
 });