import React, { forwardRef, useState } from 'react';
import Image from 'next/image';

import { Box, InputProps, Typography } from '@mui/material';
import { FileUploader } from 'react-drag-drop-files';
import { Control, Controller } from 'react-hook-form';
import UploadCloud from '@public/svg/cloud-upload.svg';

const fileTypes = ['JPG', 'PNG', 'GIF', 'PDF'];

interface IDragDropProps {
	children?: JSX.Element;
	onChange?: (event: any) => void;
	value?: unknown;
}

interface IDropZoneProps extends InputProps {
	control: Control<any>;
	errorMessage: string;
	dragDrop?: IDragDropProps;
}

const DragDrop = ({ children, onChange, value }: IDragDropProps) => {
	const [file, setFile] = useState(null);
	const handleChange = (file) => {
		setFile(file);
	};
	return (
		<FileUploader
			handleChange={onChange}
			name='file'
			types={fileTypes}
			value={value}
		>
			{children}
		</FileUploader>
	);
};

const DragDropZone = (props: IDragDropProps) => {
	return (
		<DragDrop {...props}>
			<Box component='section'>
				<Image src={UploadCloud} width={44} height={44} alt={'cloud-upload'} />
				<Typography variant='h6'>Drag and drop a file to update</Typography>
				<Typography variant='subtitle2'>Drop here</Typography>
			</Box>
		</DragDrop>
	);
};

const DropZone = forwardRef((props: IDropZoneProps, ref: any) => {
	return (
		<Controller
			name={props.name}
			control={props.control}
			render={({ field: { onChange, value } }) => (
				<DragDropZone {...props.dragDrop} />
			)}
		/>
	);
});

export default DropZone;
