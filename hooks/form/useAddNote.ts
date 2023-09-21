import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

export interface IUseAddNewNote {
	note: string;
}

export default function useAddNewNote() {
	return useForm<IUseAddNewNote>({
		defaultValues: {
			note: '',
		},
		//@ts-ignore
		resolver: yupResolver(
			object({
				note: string().required(),
			})
		),
	});
}
