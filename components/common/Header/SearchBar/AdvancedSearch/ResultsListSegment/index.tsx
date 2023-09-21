import { useContext } from 'react';

import List from '@mui/material/List';
import Button from '@mui/material/Button';
import { AdvancedSearchResults } from '@components/common/Header/SearchBar/screens';

import ResultListItem, { IResultListItemProps } from './ResultListItem';
import { VoiceSearchContext } from '../..';

import colorPalette from '@styles/color-palette';

interface IResultsListSegmentProps {
	results: IResultListItemProps[];
	type: AdvancedSearchResults;
}

const ResultsListSegment = ({ results, type }: IResultsListSegmentProps) => {
	const isVoiceSearch = useContext(VoiceSearchContext);

	return (
		<>
			<List
				sx={{
					p: 0,
				}}
			>
				{results.map((result) => (
					<ResultListItem
						type={result.type}
						title={result.title}
						subtitle={result?.subtitle}
					/>
				))}
			</List>
			<Button
				variant='text'
				sx={{
					textTransform: 'capitalize',
					color: isVoiceSearch
						? colorPalette.black
						: colorPalette.stroke.labelText,
					textDecoration: 'underline',
				}}
			>
				{`all ${type} results`}
			</Button>
		</>
	);
};

export default ResultsListSegment;
