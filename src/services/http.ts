
import axios from "axios";
import { API_DATABASE_URL } from "./base_url";
export const http = axios.create({
	baseURL: "http://127.0.0.1:8000/api/v1",
	timeout: 3000000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Referrer-Policy': 'strict-origin-when-cross-origin',
	},
});

// export const httpwithtoken = axios.create({
// 	baseURL: process.env.REACT_APP_BACKEND   ,
// 	timeout: 30000,
// 	headers: {
// 		Accept: 'application/json',
// 		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
// 		Authorization: `Bearer ${localStorage.getItem('token')}`,
// 	},
// });



