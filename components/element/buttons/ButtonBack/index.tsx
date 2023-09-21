import React from 'react';
import Link from 'next/link';

import { Box, CSSObject } from '@mui/material';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import colorPalette from '@styles/color-palette';
import { paths } from '@utils/paths';

interface IButtonBackProps {
	path?: string;
}

const ButtonBack = ({ path = paths.login }: IButtonBackProps) => {
	return (
		<Box sx={{ ...backButtonContainer }}>
			<Link href={path}>
				<ArrowBackRoundedIcon />
				{'back'}
			</Link>
		</Box>
	);
};

const backButtonContainer: CSSObject = {
	position: 'absolute',
	left: '26px',
	top: '48px',
	'& a': {
		display: 'flex',
		color: colorPalette.white,
		textDecoration: 'none',
		fontWeight: 500,
		fontSize: '22px',
	},
};
export default ButtonBack;
