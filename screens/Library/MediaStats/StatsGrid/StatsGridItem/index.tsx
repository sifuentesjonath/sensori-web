import Grid from '@mui/material/Grid';

import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

import colorPalette from '@styles/color-palette';
import StatItem, { IStatItemData } from '../../StatItem';

interface IStatGridItemProps {
	borderTop?: boolean;
	borderBottom?: boolean;
	borderRight?: boolean;
	borderLeft?: boolean;
	icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
		muiName: string;
	};
	data: IStatItemData;
}

const StatsGridItem = (props: IStatGridItemProps) => {
	const { borderTop, borderBottom, borderRight, borderLeft, icon, data } =
		props;

	return (
		<Grid
			item
			xs={1}
			sx={{
				borderTop: borderTop && `1px solid ${colorPalette.textBlue}`,
				borderBottom: borderBottom && `1px solid ${colorPalette.textBlue}`,
				borderRight: borderRight && `1px solid ${colorPalette.textBlue}`,
				borderLeft: borderLeft && `1px solid ${colorPalette.textBlue}`,
				m: 'auto',
			}}
		>
			<StatItem icon={icon} data={data} />
		</Grid>
	);
};

export default StatsGridItem;
