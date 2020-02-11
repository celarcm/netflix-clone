import movieDBApi from '../apis/movieDBApi';

export const fetchMoviesByGenre = (genreId) => async dispatch => {
    const response = await movieDBApi.get(`discover/movie?with_genres=${genreId}`);

    dispatch({ type: 'FETCH_MOVIES_BY_GENRE', payload: {
        genreId: genreId,
        movies: response.data.results
    }});
};

export const fetchMovie = (movieId) => async dispatch => {
    const response = await movieDBApi.get(`/movie/${movieId}`);
    
    dispatch({ type: 'FETCH_MOVIE', payload: response.data });
};

export const searchMovies = (searchString) => async dispatch => {
    const response = await movieDBApi.get(`/search/movie?query=${searchString}`);

    dispatch({ type: 'SEARCH_MOVIES', payload: response.data.results });
};