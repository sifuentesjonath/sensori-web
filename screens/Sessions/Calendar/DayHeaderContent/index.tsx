import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import colorPalette from '@styles/color-palette';

interface IDayHeaderContentProps {
	date: Date;
}

const DayHeaderContent = ({ date }: IDayHeaderContentProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
			}}
		>
			<Typography
				variant='caption'
				sx={{
					fontWeight: 700,
					fontSize: '10px',
					color: colorPalette.gray,
					textTransform: 'uppercase',
				}}
			>
				{date.toLocaleDateString('en-US', { month: 'short' })}
			</Typography>
			<Typography
				sx={{
					fontWeight: 500,
					fontSize: '22px',
					color: colorPalette.black,
				}}
			>
				{date.toLocaleDateString('en-US', { day: 'numeric' })}
			</Typography>
		</Box>
	);
};

export default DayHeaderContent;
