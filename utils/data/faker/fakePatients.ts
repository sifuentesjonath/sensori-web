import { fakerEN as faker } from '@faker-js/faker';
import fs from 'fs';
import { IPatient, SubscriptionTier } from '../interfaces/Patient';

function createFakePatient(): IPatient {
	const sex = faker.person.sexType();
	const firstName = faker.person.firstName(sex);
	const lastName = faker.person.lastName();
	const email = faker.internet.email({ firstName, lastName });

	return {
		uuid: faker.string.uuid(),
		avatar: faker.image.avatar(),
		birthday: faker.date.birthdate(),
		email,
		firstName,
		lastName,
		sex,
		subscriptionTier: faker.helpers.arrayElement<SubscriptionTier>([
			'home',
			'clinical',
			'researcher',
			'multisite',
		]),
	};
}

export const generateFakePatients = (quantity: number): IPatient[] => {
	const patients: IPatient[] = [];

	Array.from({ length: quantity }).forEach(() => {
		patients.push(createFakePatient());
	});

	return patients;
};

/**
 * You would need to call this file explicitly with tsx to execute the
 * following block of code, instead use `yarn faker`
 * */
const PATIENTS_SCREEN_PATH = 'screens/Patients/patients.json';

fs.writeFileSync(
	PATIENTS_SCREEN_PATH,
	JSON.stringify(generateFakePatients(100), null, 2)
);
