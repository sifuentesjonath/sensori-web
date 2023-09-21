import fs from 'fs';

import { generateFakeFiles } from './fakeFiles';
import { generateFakePatients } from './fakePatients';

const fakeFiles = generateFakeFiles(10);
const fakePatients = generateFakePatients(10);

const fakeDB = {
	files: fakeFiles,
	patients: fakePatients,
};

const FAKE_DB_PATH = 'utils/data/fakeDB.json';

fs.writeFileSync(FAKE_DB_PATH, JSON.stringify(fakeDB, null, 2));
