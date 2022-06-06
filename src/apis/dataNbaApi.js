import axios from 'axios';

export default axios.create({
    baseURL: 'https://data.nba.net'
});