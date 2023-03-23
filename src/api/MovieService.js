import axios from 'axios';

const key = '128a20585d0b60f96a438bcb2acc6f54';
const url = 'https://api.themoviedb.org/3/'

const withBaseUrl = (path) => `${url}${path}?api_key=${key}`;

export class MovieService {

}