import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

import colorPalette from '@styles/color-palette';

export enum StatItemColors {
	Blue = '#2370F8',
	Yellow = '#FFCA10',
	Pink = '#FF23E9',
	Red = '#FF3A29',
}

export interface IStatItemData {
	fileAction: 'updated' | 'favorite' | 'tagged' | 'deleted';
	quantity: number;
}

const statusColorIndex = {
	updated: StatItemColors.Blue,
	favorite: StatItemColors.Yellow,
	tagged: StatItemColors.Pink,
	deleted: StatItemColors.Red,
};

const statusTextIndex = {
	updated: 'Uploaded This Week',
	favorite: 'Favorite Files',
	tagged: 'Tagged',
	deleted: 'Deleted',
};

export interface IStatItemProps {
	icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
		muiName: string;
	};
	data: IStatItemData;
}

const StatItem = (props: IStatItemProps) => {
	const { icon: Icon, data } = props;
	const color = statusColorIndex[data.fileAction];
	const label = statusTextIndex[data.fileAction];

	return (
		<Stack
			sx={{
				px: '25px',
				py: 2,
				m: 'auto',
				boxSizing: 'content-box',
			}}
			alignItems='center'
			spacing={1}
		>
			<Box
				sx={{
					display: 'flex',
					height: '32px',
					width: '32px',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: color,
					borderRadius: '50%',
				}}
			>
				<Icon sx={{ color: colorPalette.white }} />
			</Box>
			<Box>
				<Typography
					variant='subtitle2'
					sx={{
						color: colorPalette.textBlue,
						fontWeight: 500,
						fontSize: '10px',
						whiteSpace: 'nowrap',
					}}
				>
					{label}
				</Typography>
			</Box>
			<Box
				sx={{
					backgroundColor: colorPalette.buttonBlue,
					borderRadius: '40px',
					py: '8px',
					px: '32px',
				}}
			>
				<Typography color={colorPalette.green} fontSize='16px' fontWeight={600}>
					{data.quantity}
				</Typography>
			</Box>
		</Stack>
	);
};

export default StatItem;
