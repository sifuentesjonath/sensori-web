import { CSSObject } from '@mui/material';
import colorPalette from '@styles/color-palette';

export const screenAdvisorContainer: CSSObject = {
	height: '100vh',
	background: colorPalette.backgroundBlue,
	padding: '8px 24px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	'& .MuiGrid-root': {
		width: 'fit-content',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'start',
		gap: '2rem',
		'& section': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
			gap: '2rem',
			'& .MuiTypography-body1': {
				color: colorPalette.textBlue,
				margin: '8px 0',
				width: '320px',
			},
			'& .MuiTypography-h3': {
				color: colorPalette.white,
			},
		},
	},
};

export const containerSuccess: CSSObject = {
	background: colorPalette.buttonBlue,
	padding: '36px 16px',
	borderRadius: '16px',
	border: '1px solid #d0cece',
	'& .MuiGrid-root:first-child': {
		alignSelf: 'start',
		marginLeft: '44px',
	},
};

export const containerError: CSSObject = {
	'& .MuiGrid-root:first-of-type': {
		'& img': {
			'-webkit-filter': 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
			filter: 'grayscale(100%)',
		},
	},
};

// const CustomHomeSection = styled.section`
// 	height: '100vh',
// 	backgroundColor: ,
// 	padding: 8px 24px;

// 	@media screen and (min-width: ${size.tabletMin}px) {
// 		padding: 12px 28px;
// 	}

// 	@media screen and (min-width: ${size.desktop}px) {
// 		width: 1300px;
// 		margin: 0 auto;
// 	}
// `;

// const ScreenAdvisorContainerx = styled.section`
// 	height: 100vh;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	.content,
// 	.content-description {
// 		display: flex;
// 		flex-direction: column;
// 		align-items: center;
// 		text-align: center;
// 		gap: 2rem;
// 		p {
// 			color: ${colorPalette.textBlue};
// 			margin: 8px 0;
// 			width: 320px;
// 		}
// 		h1 {
// 			color: ${colorPalette.white};
// 		}
// 	}
// 	.content {
// 		width: fit-content;
// 		margin: 0 auto;
// 		margin-bottom: 130px;
// 	}
// 	.content-as-box {
// 		background-color: ${colorPalette.buttonBlue};
// 		padding: 36px 16px;
// 		border-radius: 16px;
// 		border: 1px solid #d0cece;
// 		.content-image {
// 			align-self: start;
// 			margin-left: 44px;
// 		}
// 	}

// 	.content-link {
// 		display: flex;
// 		align-items: center;
// 		gap: 8px;
// 		text-decoration: none;
// 		p {
// 			margin: 0;
// 		}
// 	}
// 	.content-link:visited {
// 		color: inherit;
// 	}

// 	.image-content-icon {
// 		-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
// 		filter: grayscale(100%);
// 	}

// 	.content-heading {
// 		margin: 12px 0;
// 	}

// 	/* @media screen and (min-width: ${size.tabletMax}px) {
// 		height: 660px;
// 	} */
// `;
