import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, number, object, string } from 'yup';

export interface IUseUpdatePatientFormProps {
	fullname: string;
	email: string;
	phone: string;
	height: string;
	weight: string;
	sessions: number;
	suscription: boolean;
	location: string;
}

export default function useUpdatePatientForm() {
	// TODO: Use redux to de default values
	return useForm<IUseUpdatePatientFormProps>({
		defaultValues: {
			fullname: '',
			email: '',
			phone: '',
			height: '',
			weight: '',
			sessions: 0,
			suscription: false,
			location: '',
		},
		//@ts-ignore
		resolver: yupResolver(
			object({
				fullname: string().required(),
				email: string().email().required(),
				phone: string().required(),
				height: string().required(),
				weight: string().required(),
				sessions: number(),
				suscription: boolean(),
				location: string().required(),
			})
		),
	});
}
