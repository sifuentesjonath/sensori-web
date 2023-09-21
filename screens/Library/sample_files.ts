import { Tag } from './MediaLibrary/MediaList/MediaListItem';
import { IMetadata } from './RecentFiles/RecentFileCard/FileMetadata';

export interface IFile {
	uuid: string;
	metadata: IMetadata;
	tags: Tag[];
	favorite: boolean;
}

export const files: IFile[] = [
	{
		uuid: 'something1',
		metadata: {
			filename: 'file1.tdt',
			filesizeMB: 123.3,
			lastModificationDate: new Date('2023-07-18'),
		},
		tags: ['tag1', 'tag2', 'tag2', 'tag3'],
		favorite: false,
	},
	{
		uuid: 'something2',
		metadata: {
			filename: 'file2.tdt',
			filesizeMB: 84.3,
			lastModificationDate: new Date('2023-07-10'),
		},
		tags: [
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag2',
			// },
			// {
			// 	type: 'tag4',
			// },
			// {
			// 	type: 'tag3',
			// },
		],
		favorite: true,
	},
	{
		uuid: 'something3',
		metadata: {
			filename: 'file3.tdt',
			filesizeMB: 2.5,
			lastModificationDate: new Date('2023-07-13'),
		},
		tags: [
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag2',
			// },
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag4',
			// },
		],
		favorite: false,
	},
	{
		uuid: 'something4',
		metadata: {
			filename: 'file73.tdt',
			filesizeMB: 2.5,
			lastModificationDate: new Date('2023-07-13'),
		},
		tags: [
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag4',
			// },
		],
		favorite: false,
	},
	{
		uuid: 'something5',
		metadata: {
			filename: 'file04.tdt',
			filesizeMB: 2.5,
			lastModificationDate: new Date('2023-07-13'),
		},
		tags: [
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag2',
			// },
		],
		favorite: false,
	},
	{
		uuid: 'something6',
		metadata: {
			filename: 'file15.tdt',
			filesizeMB: 2.5,
			lastModificationDate: new Date('2023-07-13'),
		},
		tags: [
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag2',
			// },
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag4',
			// },
		],
		favorite: false,
	},
	{
		uuid: 'something7',
		metadata: {
			filename: 'file26.tdt',
			filesizeMB: 2.5,
			lastModificationDate: new Date('2023-07-13'),
		},
		tags: [
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag2',
			// },
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag4',
			// },
		],
		favorite: false,
	},
	{
		uuid: 'something8',
		metadata: {
			filename: 'file37.tdt',
			filesizeMB: 2.5,
			lastModificationDate: new Date('2023-07-13'),
		},
		tags: [
			// {
			// 	type: 'tag2',
			// },
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag4',
			// },
		],
		favorite: false,
	},
	{
		uuid: 'something9',
		metadata: {
			filename: 'file48.tdt',
			filesizeMB: 2.5,
			lastModificationDate: new Date('2023-07-13'),
		},
		tags: [
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag2',
			// },
			// {
			// 	type: 'tag1',
			// },
		],
		favorite: false,
	},
	{
		uuid: 'something10',
		metadata: {
			filename: 'file59.tdt',
			filesizeMB: 2.5,
			lastModificationDate: new Date('2023-07-13'),
		},
		tags: [
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag4',
			// },
		],
		favorite: false,
	},
	{
		uuid: 'something11',
		metadata: {
			filename: 'file610.tdt',
			filesizeMB: 2.5,
			lastModificationDate: new Date('2023-07-13'),
		},
		tags: [
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag2',
			// },
			// {
			// 	type: 'tag1',
			// },
			// {
			// 	type: 'tag4',
			// },
		],
		favorite: false,
	},
];
