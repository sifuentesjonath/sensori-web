import customAxios from '../customAxios';

const URL = 'app/api/fakeRealData';

export default function getFakeData() {
	return customAxios.get(URL).then((response) => response.data);
}
