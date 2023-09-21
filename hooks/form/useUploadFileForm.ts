import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

export interface IUseUploadFileForm {
	file: string;
	tags: string;
}

export default function useUploadFileForm() {
	return useForm<IUseUploadFileForm>({
		defaultValues: {
			file: '',
			tags: '',
		},
		//@ts-ignore
		resolver: yupResolver(
			object({
				file: string().required(),
				tags: string(),
			})
		),
	});
}
