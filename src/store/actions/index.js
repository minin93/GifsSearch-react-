import axios from 'axios';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const REQUEST_GIFS = 'REQUEST_GIFS';

const API_URL = 'https://api.giphy.com/v1/gifs/search?q=';
const API_KEY = 'G47kFYNH26cXaA8DaRtxqwKZXnqYu4tY';

export function requestGifs(term = null) {
	const data = axios
		.get(`${API_URL}${term.replace(/\s/g, '+')}&api_key=${API_KEY}`)
		.then((response) => response.data);
	return {
		type: REQUEST_GIFS,
		payload: data,
	};
}

export function openModal(gif) {
	return {
		type: OPEN_MODAL,
		gif,
	};
}

export function closeModal() {
	return {
		type: CLOSE_MODAL,
	};
}
// const getAllGifs = (term) =>
// 	axios
// 		.get(`${API_URL}${term.replace(/\s/g, '+')}&api_key=${API_KEY}`)
// 		.then((response) => response.data);
