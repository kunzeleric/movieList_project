import axios from 'axios';

const key = '128a20585d0b60f96a438bcb2acc6f54';
const url = 'https://api.themoviedb.org/3/'

const withBaseUrl = (path) => `${url}${path}?api_key=${key}`;
const discoverUrl = (path) => `${url}${path}?api_key=${key}&sort_by=vote_count.desc`;
const genreUrl = (path, genreId) => `${url}${path}?api_key=${key}&sort_by=popularity.desc&with_genres=${genreId}`;

export class MovieService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }

    static getMovieDetails(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }

    static searchMovies(movie) {
        return axios(withBaseUrl('search/movie') + `&query=${movie}`);
    }

    static getMostWatched(){
        return axios(discoverUrl('discover/movie/'));
    }

    static getRecommendations(id){
        return axios(withBaseUrl(`movie/${id}/recommendations`));
    }

    static getTopRated(){
        return axios(withBaseUrl('/movie/top_rated'));
    }

    static getGenres(){
        return axios(withBaseUrl('genre/movie/list'));
    }

    static getMoviesFromGenre(genreId){
        return axios(genreUrl(`/discover/movie/`, `${genreId}`));
    }
}