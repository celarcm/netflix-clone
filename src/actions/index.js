import movieDBApi from '../apis/movieDBApi';

export const fetchMoviesByGenre = (genreId) => async dispatch => {
    console.log('inside fetchMoviesByGenre');
    const response = await movieDBApi.get(`discover/movie?with_genres=${genreId}`);

    console.log('response', response);

    dispatch({ type: 'FETCH_MOVIES_BY_GENRE', payload: {
        genreId: genreId,
        movies: response.data.results
    }});
};

export const fetchMovie = (movieId) => async dispatch => {
    const response = await movieDBApi.get(`/movie/${movieId}`);

    dispatch({ type: 'FETCH_MOVIE', payload: response.result });
};

export const searchMovies = (searchString) => async dispatch => {
    const response = await movieDBApi.get(`/search/${searchString}`);

    dispatch({ type: 'SEARCH_MOVIES', payload: response.result });
};