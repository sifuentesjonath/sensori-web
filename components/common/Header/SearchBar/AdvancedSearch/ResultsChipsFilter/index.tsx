import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ChipListItem from '@components/element/ChipsListItem';

import { IScreen, screens } from '../../screens';

import {
	activeChipListItem,
	chipList,
	filterHeader,
	filterHeaderVoiceSearch,
	inactiveChipListItem,
} from './styles';

interface IResultsChipsFilterProps {
	isVoiceSearch: boolean;
}
interface IFilter extends IScreen {
	active: boolean;
}

const ResultsChipsFilter = ({ isVoiceSearch }: IResultsChipsFilterProps) => {
	const initialFilter: IFilter[] = screens.map((screen) => ({
		...screen,
		active: false,
	}));
	const [selectedFilters, setSelectedFilters] = useState(initialFilter);

	const handleOnToggleFilter = (filterId) => {
		setSelectedFilters(
			selectedFilters.map((filter) => {
				if (filter.id === filterId) {
					return { ...filter, active: !filter.active };
				} else {
					return filter;
				}
			})
		);
	};

	const filterHeaderVoice = isVoiceSearch ? filterHeaderVoiceSearch : {};

	return (
		<Stack>
			<Box>
				<Typography
					sx={{
						...filterHeader,
						...filterHeaderVoice,
					}}
					variant='subtitle2'
				>
					What are you looking for?
				</Typography>
			</Box>
			<Box
				component='ul'
				sx={{
					...chipList,
				}}
			>
				{selectedFilters.map((filter) => {
					const chipDynamicStyles = filter.active ? activeChipListItem : {};

					return (
						<ChipListItem
							key={filter.name}
							sx={{
								...inactiveChipListItem,
								...chipDynamicStyles,
							}}
							label={filter.name}
							handleDelete={
								filter.active
									? () => handleOnToggleFilter(filter.id)
									: undefined
							}
							onClick={() => handleOnToggleFilter(filter.id)}
							size='small'
						/>
					);
				})}
			</Box>
		</Stack>
	);
};

export default ResultsChipsFilter;
