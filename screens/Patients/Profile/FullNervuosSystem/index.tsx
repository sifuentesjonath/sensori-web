/**React */
import React, { useState } from 'react';
/**Next */
import Image from 'next/image';

/**Mui Material */
import {
	Box,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
	Button,
} from '@mui/material';

/**Styles */
import { fullNervousStyle } from './style';
import { device } from '@styles/breakPoints';

/**Images */
import MockupBody from '@public/svg/NervousSystem.svg';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';

/**Components */
import SystemPopper from './Popper';
import { mockupPopperFirstView, mockupPopperSecondView } from './mockupPoppers';
import colorPalette from '@styles/color-palette';

const FullNervousSystem = () => {
	const theme = useTheme();
	const [fullButtonsView, setFullButtonsView] = useState<boolean>(false);
	const isMobileView = useMediaQuery(device.mobile);
	const isTabletView = useMediaQuery(device.tablet);

	const handleBtnChangeView = () => {
		setFullButtonsView(!fullButtonsView);
	};

	return (
		<Grid
			sx={{
				...fullNervousStyle,
				...(isMobileView && { display: 'none' }),
				[theme.breakpoints.down(732)]: {
					display: 'none',
				},
				...(isTabletView && {
					width: '63vw',
					'& .MuiBox-root': {
						padding: '2em',
						display: 'flex',
						justifyContent: 'center',
						'& .full-system': { width: '500px', height: '556px' },
					},
				}),
				[theme.breakpoints.between(1024, 1156)]: {
					width: '62vw',
				},
			}}
			item
		>
			<Button
				type='button'
				variant='text'
				sx={{
					width: 'fit-content',
					textTransform: 'none',
					position: 'absolute',
					marginLeft: '48em',
					[theme.breakpoints.down(1800)]: {},
					[theme.breakpoints.between(730, 1156)]: {
						marginLeft: '40vw',
					},
					color: colorPalette.textBlue,
					'&:hover': {
						color: colorPalette.green,
					},
					'&:active': {
						color: colorPalette.green,
					},
				}}
				onClick={handleBtnChangeView}
				startIcon={<ChangeCircleOutlinedIcon />}
			>
				Change view
			</Button>
			<Typography>Full Nervous System Scan</Typography>
			{/* TODO: How manage this part? */}
			<Box>
				{!fullButtonsView &&
					mockupPopperFirstView.map((popper) => <SystemPopper {...popper} />)}
				{/* TODO: Create the list for the second kind of popper */}
				{fullButtonsView &&
					mockupPopperSecondView.map((popper) => (
						<SystemPopper {...popper} variant='icon' />
					))}
				{/* <SystemPopper coordinates={{ y: 300 }} placement='left-start' /> */}
				<Image
					src={MockupBody}
					className='full-system'
					alt='full-nervous-system-scan'
				/>
			</Box>
		</Grid>
	);
};

export default FullNervousSystem;
