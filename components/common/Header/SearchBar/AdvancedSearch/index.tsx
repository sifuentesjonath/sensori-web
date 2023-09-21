import { useContext } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import DialogContent from '@mui/material/DialogContent';

import ClearIcon from '@mui/icons-material/Clear';
import MicNoneIcon from '@mui/icons-material/MicNone';

import { VoiceSearchContext } from '../index';

import { results } from './sample_results';

import ResultsChipsFilter from './ResultsChipsFilter/index';
import ResultsListSegment from './ResultsListSegment';
import SearchBarInput from './SearchBarInput';

import {
	advancedSearchContainer,
	advancedSearchContainerVoiceSearch,
} from './styles';
import { scrollStyleRemoval } from '@screens/Library/style';

export interface IAdvancedSearchProps {
	open: boolean;
	close: () => void;
}

function AdvancedSearch(props: IAdvancedSearchProps) {
	const { open, close } = props;

	const isVoiceSearch = useContext(VoiceSearchContext);

	const patientsResults = results.filter((result) => result.type === 'patient');
	const reportsResults = results.filter((result) => result.type === 'report');
	const facilitiesResults = results.filter(
		(result) => result.type === 'facility'
	);
	const mediaResults = results.filter((result) => result.type === 'media');
	const sessionsResults = results.filter((result) => result.type === 'session');

	const dialogDynamicStyling = isVoiceSearch
		? advancedSearchContainerVoiceSearch
		: {};

	return (
		<Dialog
			onClose={close}
			open={open}
			sx={
				/**
				 * Mixing stylings, the last one with selectors lets say that is for
				 * inline styling, and the scrollStyleRemoval is there because otherwise
				 * it would cause conflicts
				 */
				[
					{ ...advancedSearchContainer },
					{ ...dialogDynamicStyling },
					{
						'& .MuiPaper-root': {
							...scrollStyleRemoval,
						},
					},
				]
			}
		>
			<DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
				<SearchBarInput
					startAdornment={isVoiceSearch ? MicNoneIcon : undefined}
					endAdornment={ClearIcon}
					variant='outlined'
				/>
			</DialogTitle>

			<DialogContent dividers>
				<ResultsChipsFilter isVoiceSearch={isVoiceSearch} />
			</DialogContent>

			<DialogContent dividers>
				<ResultsListSegment results={patientsResults} type='patient' />
			</DialogContent>

			<DialogContent dividers>
				<ResultsListSegment results={reportsResults} type='report' />
			</DialogContent>

			<DialogContent dividers>
				<ResultsListSegment results={facilitiesResults} type='facility' />
			</DialogContent>

			<DialogContent dividers>
				<ResultsListSegment results={mediaResults} type='media' />
			</DialogContent>

			<DialogContent dividers>
				<ResultsListSegment results={sessionsResults} type='session' />
			</DialogContent>
		</Dialog>
	);
}

export default AdvancedSearch;
