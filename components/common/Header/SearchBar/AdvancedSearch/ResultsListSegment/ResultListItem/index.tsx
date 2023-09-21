import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

import ResultMetadata from './ResultMetadata';

import { AdvancedSearchResults } from '@components/common/Header/SearchBar/screens';

import colorPalette from '@styles/color-palette';
import { CSSObject } from '@emotion/react';

export interface IResultListItemProps {
	type: AdvancedSearchResults;
	title: string;
	subtitle?: string;
}

const ResultListItem = ({ type, title, subtitle }: IResultListItemProps) => {
	const Icon = () => {
		switch (type) {
			case 'patient':
				return (
					<PersonOutlinedIcon
						sx={{
							color: colorPalette.green,
						}}
					/>
				);
			case 'report':
				return (
					<SummarizeOutlinedIcon
						sx={{
							color: colorPalette.stroke.yellow,
						}}
					/>
				);
			case 'facility':
				return (
					<CorporateFareOutlinedIcon
						sx={{
							color: colorPalette.orange,
						}}
					/>
				);
			case 'media':
				return (
					<InsertDriveFileOutlinedIcon
						sx={{
							color: colorPalette.stroke.violet,
						}}
					/>
				);
			case 'session':
				return (
					<BarChartOutlinedIcon
						sx={{
							color: colorPalette.stroke.steelBlue,
						}}
					/>
				);
			default:
				break;
		}
	};

	return (
		<ListItem
			sx={{
				p: 1,
			}}
		>
			<ListItemAvatar>
				<Avatar
					sx={{
						// border: `1px solid ${colorPalette.textBlue}`,
						backgroundColor: colorPalette.white,
					}}
				>
					<Icon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText>
				<Stack direction='row' justifyContent='flex-start'>
					<ResultMetadata title={title} subtitle={subtitle} />
				</Stack>
			</ListItemText>
		</ListItem>
	);
};

export default ResultListItem;
