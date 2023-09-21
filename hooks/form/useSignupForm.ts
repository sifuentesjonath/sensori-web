import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

export interface IUseSignupForm {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export default function useSignupForm() {
	return useForm<IUseSignupForm>({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
		//@ts-ignore
		resolver: yupResolver(
			object({
				firstName: string().required(),
				lastName: string().required(),
				email: string().email().required(),
				password: string().required().min(8),
			})
		),
	});
}
