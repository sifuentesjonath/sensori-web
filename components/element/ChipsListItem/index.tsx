import { styled } from '@mui/material';
import Chip, { ChipProps } from '@mui/material/Chip';

const ChipListItemWrapper = styled('li')(({ theme }) => ({
	margin: theme.spacing(0.5),
}));

interface IChipListItemProps extends ChipProps {
	handleDelete?: (arg) => void;
}

const ChipListItem = (props: IChipListItemProps) => {
	const { sx, label, handleDelete, onClick, size } = props;
	return (
		<ChipListItemWrapper sx={sx}>
			<Chip
				label={label}
				onDelete={!!handleDelete ? handleDelete : undefined}
				onClick={onClick}
				size={size}
			/>
		</ChipListItemWrapper>
	);
};

export default ChipListItem;
