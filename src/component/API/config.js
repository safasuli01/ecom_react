import axios from 'axios';

const axiousInstance = axios.create ({
    baseURL:'https://dummyjson.com/'
})

export default axiousInstance