import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

export interface IUseRestorePasswordForm {
	email: string;
}

export default function useRestorePasswordForm() {
	return useForm<IUseRestorePasswordForm>({
		defaultValues: {
			email: '',
		},
		//@ts-ignore
		resolver: yupResolver(
			object({
				email: string().email().required(),
			})
		),
	});
}
