import fakerDB from '@/api/fakeDB';
import { IFile } from '@screens/Library/sample_files';
import { useState, useEffect } from 'react';

interface FilesState {
	files: IFile[];
}

export const useFiles = () => {
	const [isLoading, setIsLoading] = useState(true);

	const [filesState, setFilesState] = useState<FilesState>({
		files: [],
	});

	const getFiles = async () => {
		const filesPromise = fakerDB.get<IFile[]>('/files');

		const response = await filesPromise;

		setFilesState({
			files: response.data,
		});

		setIsLoading(false);
	};

	useEffect(() => {
		getFiles();
	}, []);

	return {
		...filesState,
		isLoading,
	};
};
