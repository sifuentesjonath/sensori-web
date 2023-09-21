import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

export interface IUseLoginForm {
	email: string;
	password: string;
}

export default function useLoginForm() {
	return useForm<IUseLoginForm>({
		defaultValues: {
			email: '',
			password: '',
		},
		//@ts-ignore
		resolver: yupResolver(
			object({
				email: string().email().required(),
				password: string().required().min(8),
			})
		),
	});
}
