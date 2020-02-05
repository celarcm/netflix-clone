import {combineReducers} from 'redux';
import moviesByGenreReducer from './moviesByGenreReducer';
import moviesReducer from './moviesReducer';
import searchReducer from './searchReducer';

export default combineReducers({ 
    genreMovies: moviesByGenreReducer,
    movies: moviesReducer,
    searchResults: searchReducer
 });