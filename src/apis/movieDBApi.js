import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '6e81589cc4f6c820c3a735a5b8caae78'
    }
});