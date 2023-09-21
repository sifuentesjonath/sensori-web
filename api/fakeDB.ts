import axios from 'axios';

const fakerDB = axios.create({
	// baseURL: process.env.JSON_SERVER,
	baseURL: 'http://localhost:3004',
});

console.log(fakerDB.defaults.baseURL);
export default fakerDB;
