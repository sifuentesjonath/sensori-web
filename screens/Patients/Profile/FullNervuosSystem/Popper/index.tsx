/**React */
import { useState } from 'react';
/**Next */
import Image, { ImageLoaderProps } from 'next/image';
/**Mui Material */
import {
	Paper,
	Popper,
	Button,
	CSSObject,
	Avatar,
	Typography,
	Box,
	useTheme,
} from '@mui/material';
/**Styles */
import colorPalette from '@styles/color-palette';
/**Utils */
import { v4 } from 'uuid';
import { initialPosition, ISystemPopperProps } from './types';

import BackgroundImage from '@public/svg/popper-button-background.svg';
import BackgroundImageOrange from '@public/svg/backgroundOrange.svg';

const SystemPopper = ({
	title,
	description,
	coordinates,
	placement,
	popperPosition = initialPosition,
	sx,
	image,
	variant = 'button',
	status = 'safe',
	buttonImage,
}: ISystemPopperProps) => {
	const theme = useTheme();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const { up, right, down, left } = popperPosition;
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	const positionX1 = 6 + coordinates.down;
	const positionX2 = 46 + coordinates.down;

	if (variant === 'button') {
		return (
			<>
				<Button
					aria-describedby={id}
					type='button'
					onClick={handleClick}
					sx={{
						position: 'absolute',
						top: `${positionX1}em`,
						marginLeft: coordinates.right,
						marginRight: coordinates.left,
						minWidth: '20px',
						width: '40px',
						height: '40px',
						borderRadius: '60px',
						[theme.breakpoints.down(1396)]: {
							top: `${positionX2}em`,
						},
					}}
				>
					<Image
						src={BackgroundImage}
						layout='fill'
						objectFit='cover'
						alt={'background'}
					/>
					<Paper
						sx={{
							width: '20px',
							height: '20px',
							background: colorPalette.buttonRed,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: '20px',
						}}
					>
						<Paper
							sx={{
								width: '8px',
								height: '8px',
								background: colorPalette.white,
								borderRadius: '20px',
								zIndex: 5,
							}}
						/>
					</Paper>
				</Button>
				<Popper id={id} open={open} anchorEl={anchorEl} placement={placement}>
					<Paper
						sx={{
							...sx,
							position: 'relative',
							marginBottom: `${up}em`,
							marginTop: `${down}em`,
							marginRight: `${left}em`,
							marginLeft: `${right}em`,
							width: '11em',
							height: '11em',
							minHeight: '180px',
							padding: '16px',
							borderRadius: '52px 16px 16px 16px',
							background: colorPalette.buttonBlueStrong,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							'& .MuiAvatar-root': {
								marginLeft: '8px',
							},
						}}
					>
						<Avatar
							sx={{ background: colorPalette.white, width: 48, height: 48 }}
						>
							<Image alt={`btnScan-${v4()}`} {...image} />
						</Avatar>
						<Box
							sx={{
								padding: '2px',
								display: 'flex',
								flexDirection: 'column',
								gap: ' 8px',
							}}
						>
							<Typography
								sx={{
									fontSize: '16px',
									fontWeight: 600,
									color: colorPalette.green,
								}}
							>
								{title}
							</Typography>
							<Typography
								sx={{
									fontSize: '10px',
									fontWeight: 600,
									color: colorPalette.white,
								}}
							>
								{description}
							</Typography>
						</Box>
					</Paper>
				</Popper>
			</>
		);
	}
	if (variant === 'icon') {
		return (
			<>
				<Button
					aria-describedby={id}
					type='button'
					onClick={handleClick}
					sx={{
						position: 'absolute',
						top: `${positionX1}em`,
						marginLeft: coordinates.right,
						marginRight: coordinates.left,
						minWidth: '20px',
						width: '56px',
						height: '56px',
						borderRadius: '60px',
						padding: 0,
						[theme.breakpoints.down(1396)]: {
							top: `${positionX2}em`,
						},
						//TODO: Create props to custom this colors
						background: colorPalette.greenOpacity,
						...(status === 'safe' && {
							'&:hover': {
								backgroundColor: colorPalette.greenOpacity,
							},
						}),
						...(status === 'warning' && {
							'&:hover': {
								backgroundColor: colorPalette.greenOpacity,
							},
						}),
						...(status === 'danger' && {
							'&:hover': {
								backgroundColor: colorPalette.buttonRedOpacity,
							},
						}),
					}}
				>
					{status === 'warning' && (
						<Image
							src={BackgroundImageOrange}
							layout='fill'
							objectFit='cover'
							alt={'background'}
						/>
					)}
					{status === 'danger' && (
						<Image
							src={BackgroundImage}
							layout='fill'
							objectFit='cover'
							alt={'background'}
						/>
					)}

					<Paper
						sx={{
							zIndex: 1,
							width: '36px',
							height: '36px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: '20px',
							...(status === 'safe' && {
								background: colorPalette.green,
							}),
							...(status === 'warning' && {
								background: colorPalette.buttonOrange,
							}),
							...(status === 'danger' && {
								background: colorPalette.buttonRed,
							}),
						}}
					>
						<Image {...buttonImage} alt={'background'} objectFit='cover' />
						{/* <Image image={} /> */}
					</Paper>
				</Button>
				<Popper id={id} open={open} anchorEl={anchorEl} placement={placement}>
					<Paper
						sx={{
							...sx,
							position: 'relative',
							marginBottom: `${up}em`,
							marginTop: `${down}em`,
							marginRight: `${left}em`,
							marginLeft: `${right}em`,
							width: '11em',
							height: '12em',
							minHeight: '180px',
							padding: '24px',
							borderRadius: '16px 80px 80px 80px',
							background: colorPalette.buttonBlueOpacity,
							display: 'flex',
							flexDirection: 'column',
							gap: '1em',
						}}
					>
						<Avatar sx={{ background: colorPalette.white }}>
							<Image alt={`btnScan-${v4()}`} {...image} />
						</Avatar>
						<Box>
							<Typography
								sx={{
									fontSize: '16px',
									fontWeight: 600,
									color: colorPalette.green,
								}}
							>
								{title}
							</Typography>
							<Typography
								sx={{
									fontSize: '12px',
									fontWeight: 500,
									color: colorPalette.white,
								}}
							>
								{description}
							</Typography>
						</Box>
					</Paper>
				</Popper>
			</>
		);
	}
};

export default SystemPopper;
