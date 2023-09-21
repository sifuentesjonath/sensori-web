//TODO: Change this hook, is better f create a service to consume de endpoints
import { auth } from '@auth/firebaseApp';
import SweetAlert from '@components/notice/SweetAlert';
import { useRouter } from 'next/navigation';
// import {paths} from '@utils/paths';

export const useIsEmailVerified = () => {
	const handleSubmit = () => {
		//@ts-ignore igonre the type
		return auth?.currentUser?.emailVerified;
	};
	return [handleSubmit];
};
