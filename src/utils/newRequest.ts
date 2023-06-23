import axios from 'axios';

const newRequest = axios.create({
	baseURL: 'https://gacha-shop-inqa8.ondigitalocean.app/api/',
	// baseURL: 'http://localhost:8080/api/',
	withCredentials: true,
});

export default newRequest;
