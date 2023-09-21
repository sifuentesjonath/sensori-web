import { fakerEN as faker } from '@faker-js/faker';
import fs from 'fs';

import { Tag } from '@screens/Library/MediaLibrary/MediaList/MediaListItem';

import { IFile } from '@screens/Library/sample_files';

function createFakeFile(): IFile {
	return {
		uuid: faker.string.uuid(),
		metadata: {
			filename: faker.system.fileName(),
			filesizeMB: faker.number.float({ min: 1.0, max: 800, precision: 0.01 }),
			lastModificationDate: faker.date.recent({ days: 10 }),
		},
		tags: faker.helpers.arrayElements<Tag>(['tag1', 'tag2', 'tag3', 'tag4'], {
			min: 1,
			max: 4,
		}),
		favorite: faker.datatype.boolean({ probability: 0.2 }),
	};
}

export const generateFakeFiles = (quantity: number): IFile[] => {
	const files: IFile[] = [];

	Array.from({ length: quantity }).forEach(() => {
		files.push(createFakeFile());
	});

	return files;
};

/**
 * You would need to call this file explicitly with tsx to execute the
 * following block of code, instead use `yarn faker`
 * */
const LIBRARY_SCREEN_PATH = 'screens/Library/files.json';

fs.writeFileSync(
	LIBRARY_SCREEN_PATH,
	JSON.stringify(generateFakeFiles(1000), null, 2)
);
