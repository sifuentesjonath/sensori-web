import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

import colorPalette from '@styles/color-palette';
import Chip from '@mui/material/Chip';

import { styled } from '@mui/material/styles';
import { IFile } from '@screens/Library/sample_files';
import FileMetadata from '@screens/Library/RecentFiles/RecentFileCard/FileMetadata';
import FileActionIcons from '@screens/Library/RecentFiles/RecentFileCard/FileActionIcons';
import ChipListItem from '@components/element/ChipsListItem';

enum TagsFillColors {
	// "tag1" = "#FFF5D3",
	// Key might be "tag1" i.e., yeah it works!
	Yellow = '#FFF5D3',
	Violet = '#D6E5FF',
	Green = '#C7FFEA',
	Blue = '#C7ECFF',
}

enum TagsLabelColors {
	Yellow = '#ECBB0E',
	Violet = '#2370F8',
	Green = '#0B6D4E',
	Blue = '#0083C8',
}

export type Tag = 'tag1' | 'tag2' | 'tag3' | 'tag4';

const tagFillColorIndex = {
	tag1: TagsFillColors.Yellow,
	tag2: TagsFillColors.Violet,
	tag3: TagsFillColors.Green,
	tag4: TagsFillColors.Blue,
};

const tagLabelColorIndex = {
	tag1: TagsLabelColors.Yellow,
	tag2: TagsLabelColors.Violet,
	tag3: TagsLabelColors.Green,
	tag4: TagsLabelColors.Blue,
};

const tagDisplayTextIndex = {
	tag1: 'Tag 1',
	tag2: 'Tag 2',
	tag3: 'Tag 3',
	tag4: 'Tag 4',
};

interface ITagsProps {
	tags: Tag[];
}
const Tags = ({ tags }: ITagsProps) => {
	return (
		<Box
			component='ul'
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexWrap: 'wrap',
				listStyle: 'none',
				p: 0.5,
				m: 0,
			}}
		>
			{tags.map((tag) => (
				<Tag type={tag} />
			))}
		</Box>
	);
};

const Tag = ({ type }) => {
	return (
		<ChipListItem
			sx={{
				'& .MuiChip-root': {
					backgroundColor: tagFillColorIndex[type],
				},
				'& .MuiChip-label': {
					color: tagLabelColorIndex[type],
					fontSize: '12px',
					fontWeight: 600,
				},
			}}
			label={tagDisplayTextIndex[type]}
		/>
	);
};
interface IMediaListItemProps {
	file: IFile;
}

const MediaListItem = ({ file }: IMediaListItemProps) => {
	return (
		<ListItem
		// secondaryAction={<FavoriteAndElipsis />}
		>
			<ListItemAvatar>
				<Avatar
					sx={{
						border: `1px solid ${colorPalette.textBlue}`,
						backgroundColor: 'inherit',
					}}
				>
					<InsertDriveFileOutlinedIcon
						sx={{
							color: colorPalette.green,
						}}
					/>
				</Avatar>
			</ListItemAvatar>
			<ListItemText>
				<Stack direction='row' justifyContent='space-between'>
					<Stack direction='row' spacing={1}>
						<Stack>
							<FileMetadata metadata={file.metadata} />
						</Stack>
						<Tags tags={file.tags} />
					</Stack>
					<FileActionIcons
						file={file}
						favoriteColor={colorPalette.white}
						options={['Tag1', 'Tag2', 'Tag3', 'Tag4']}
						fileIcon={false}
					/>
				</Stack>
			</ListItemText>
		</ListItem>
	);
};

export default MediaListItem;
