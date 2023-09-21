import { CSSObject } from '@mui/material';
import styled from 'styled-components';

export const HomeContainer = styled.div`
	overflow-x: hidden; // avoid horizontal scroll
	:target {
		/* Scrolling offset to respect fixed header */
		scroll-margin-top: 100px !important;
	}
`;

export const scrollStyleRemoval: CSSObject = {
	'&::-webkit-scrollbar': {
		width: '0.4em',
	},
	'&::-webkit-scrollbar-track': {
		boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
		webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
	},
	'&::-webkit-scrollbar-thumb': {
		backgroundColor: 'rgba(0,0,0,.1)',
		// outline: '1px solid slategrey',
	},
};
