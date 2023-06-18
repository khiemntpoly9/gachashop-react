import axios from 'axios';

const newRequest = axios.create({
	// baseURL: 'https://walrus-app-h879i.ondigitalocean.app/api/',
	baseURL: 'http://localhost:8080/api/',
	withCredentials: true,
});

export default newRequest;
