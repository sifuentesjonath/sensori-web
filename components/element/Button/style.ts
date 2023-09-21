import colorPalette from '@/styles/color-palette';
import styledComponent from 'styled-components';
import { CSSObject, styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';

export const StyledAnchor = styledComponent.a`
	min-width: 10rem;
	min-height: 2.6rem;

	background: ${colorPalette.green};
	color: ${colorPalette.textBlue};

	border: 1px solid ${colorPalette.gray};
	border-radius: 16px;
	border-style: none;

	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
    text-transform: none;

	cursor: pointer;
	&:hover,
	&:focus {
		background: ${colorPalette.gray};
		background: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(${colorPalette.gray}),
			to(${colorPalette.gray})
		);
		background: -moz-linear-gradient(top, ${colorPalette.gray}, ${colorPalette.gray});
		background: linear-gradient(to bottom, ${colorPalette.gray}, ${colorPalette.gray});
		color: #ffffff;
		text-decoration: none;
	}
	&:active {
		background: #${colorPalette.gray};
		background: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(#${colorPalette.gray}),
			to(#${colorPalette.gray})
		);
		background: -moz-linear-gradient(top, #${colorPalette.gray}, ${colorPalette.gray});
		background: linear-gradient(to bottom, ${colorPalette.gray}, ${colorPalette.gray});
	}
`;

export const styledButton: CSSObject = {
	background: colorPalette.green,
	textTransform: 'none',
	height: '2.6rem',
	minWidth: '10rem',
	minHeight: '2.6rem',
	border: `1px solid ${colorPalette.gray}`,
	borderRadius: '24px',
	borderStyle: 'none',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	textDecoration: 'none',
	cursor: 'pointer',
	'&:hover': {
		background: `-webkit-gradient(
			linear,
			left top,
			left bottom,
			from(${colorPalette.gray}),
			to(${colorPalette.gray})
		)`,
	},
};
export const StyledButton = styled(LoadingButton)`
	height: '2.6rem';

	min-width: 10rem;
	min-height: 2.6rem;

	background: ${colorPalette.green};
	color: ${colorPalette.textBlue};

	border: 1px solid ${colorPalette.gray};
	border-radius: 24px;
	border-style: none;

	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	text-transform: none;

	cursor: pointer;
	&:hover,
	&:focus {
		background: ${colorPalette.gray};
		background: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(${colorPalette.gray}),
			to(${colorPalette.gray})
		);
		background: -moz-linear-gradient(
			top,
			${colorPalette.gray},
			${colorPalette.gray}
		);
		background: linear-gradient(
			to bottom,
			${colorPalette.gray},
			${colorPalette.gray}
		);
		color: #ffffff;
		text-decoration: none;
	}
	&:active {
		background: ${colorPalette.gray};
		background: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(${colorPalette.gray}),
			to(${colorPalette.gray})
		);
		background: -moz-linear-gradient(
			top,
			${colorPalette.gray},
			${colorPalette.gray}
		);
		background: linear-gradient(
			to bottom,
			${colorPalette.gray},
			${colorPalette.gray}
		);
	}
`;
