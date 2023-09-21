import customAxios from '../customAxios';

const URL = 'users';

export default function getUsers() {
	return customAxios.get(URL).then((response) => response.data);
}

export function createUser(name: string, email: string, uid: string) {
	return customAxios
		.post(URL, { name, email, uid })
		.then((response) => response.data);
}

export function getUser(uid: string) {
	return customAxios.get(`${URL}/${uid}`).then((response) => response.data);
}

export function updateUser(uid: string, name: string, email: string) {
	return customAxios
		.put(`${URL}/${uid}`, { name, email })
		.then((response) => response.data);
}

export function deleteUser(uid: string) {
	return customAxios.delete(`${URL}/${uid}`).then((response) => response.data);
}
