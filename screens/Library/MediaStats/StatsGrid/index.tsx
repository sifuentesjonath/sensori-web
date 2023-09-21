import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import Grid from '@mui/material/Grid';
import StatsGridItem from './StatsGridItem';

const StatsGrid = () => {
	return (
		<Grid container columns={2}>
			<StatsGridItem
				borderBottom
				borderRight
				icon={CloudUploadIcon}
				data={{ fileAction: 'updated', quantity: 328 }}
			/>
			<StatsGridItem
				borderBottom
				borderLeft
				icon={StarBorderRoundedIcon}
				data={{ fileAction: 'favorite', quantity: 82 }}
			/>
			<StatsGridItem
				borderTop
				borderRight
				icon={LocalOfferOutlinedIcon}
				data={{ fileAction: 'tagged', quantity: 12 }}
			/>
			<StatsGridItem
				borderTop
				borderLeft
				icon={DeleteOutlinedIcon}
				data={{ fileAction: 'deleted', quantity: 51 }}
			/>
		</Grid>
	);
};

export default StatsGrid;
