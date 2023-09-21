import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { AppContext } from '@/providers/AppProvider';
import { Button } from '@mui/material';
import { greenButton } from '@styles/cssObjects/buttons';
import ExpandIcon from '@public/svg/expandBlack.svg';
import CompressIcon from '@public/svg/compress-alt 1.svg';

interface ICurrentSessionButton {
	variant?: 'expand' | 'compress';
}

export const CurrentSessionButton = ({
	variant = 'expand',
}: ICurrentSessionButton) => {
	const [image, setImage] = useState();
	const { toggleOpenCurrentSession, toggleCloseCurrentSession } =
		useContext(AppContext);

	const handleOnClick = () => {
		if (variant === 'expand') toggleOpenCurrentSession();
		if (variant === 'compress') toggleCloseCurrentSession();
	};

	return (
		<Button
			sx={{
				...greenButton,
				height: '3.5em',
				minWidth: '52px',
				width: '3em',
			}}
			onClick={handleOnClick}
		>
			{variant === 'expand' && <Image src={ExpandIcon} alt='expand-session' />}
			{variant === 'compress' && (
				<Image src={CompressIcon} alt='contraid-session' />
			)}
		</Button>
	);
};
