import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import useMediaQuery from '@mui/material/useMediaQuery';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import colorPalette from '@styles/color-palette';

import StatItem from '../StatItem';
import { scrollStyleRemoval } from '@screens/Library/style';

const StatsRow = () => {
	return (
		<Stack
			direction='row'
			justifyContent={{
				xs: 'flex-start',
				md: 'space-evenly',
			}}
			sx={{
				overflowX: 'scroll',
				...scrollStyleRemoval,
			}}
		>
			<Stack
				direction='row'
				justifyContent='space-between'
				spacing={{
					xs: 1,
					md: 4,
				}}
			>
				<StatItem
					icon={CloudUploadIcon}
					data={{ fileAction: 'updated', quantity: 328 }}
				/>
				<Divider
					orientation='vertical'
					flexItem
					sx={{ borderColor: colorPalette.textBlue }}
				/>
				<StatItem
					icon={StarBorderRoundedIcon}
					data={{ fileAction: 'favorite', quantity: 82 }}
				/>
			</Stack>
			<Divider
				orientation='vertical'
				flexItem
				sx={{ borderColor: colorPalette.textBlue }}
			/>
			<Stack
				direction='row'
				justifyContent='space-between'
				spacing={{
					xs: 1,
					md: 4,
				}}
			>
				<StatItem
					icon={LocalOfferOutlinedIcon}
					data={{ fileAction: 'tagged', quantity: 12 }}
				/>
				<Divider
					orientation='vertical'
					flexItem
					sx={{ borderColor: colorPalette.textBlue }}
				/>
				<StatItem
					icon={DeleteOutlinedIcon}
					data={{ fileAction: 'deleted', quantity: 51 }}
				/>
			</Stack>
		</Stack>
	);
};

export default StatsRow;
