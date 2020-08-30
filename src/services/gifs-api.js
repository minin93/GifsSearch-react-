import axios from 'axios';

const key = 'G47kFYNH26cXaA8DaRtxqwKZXnqYu4tY';
const BASE_URL = 'https://api.giphy.com/v1/gifs/search?q=';

const getAllGifs = (term) =>
	axios
		.get(`${BASE_URL}${term.replace(/\s/g, '+')}&api_key=${key}`)
		.then((response) => response.data);

export { getAllGifs };
