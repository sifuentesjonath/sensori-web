import { v4 } from 'uuid';

interface PatientData {
	id: string;
	name: string;
}
const generateShortUUID = () => {
	const fullUUID = v4(); // Genera un UUID v4
	const shortUUID = fullUUID.slice(0, 8); // Toma los primeros 8 caracteres del UUID
	return shortUUID;
};

export const mockupPatientData: PatientData[] = [
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
	{
		id: generateShortUUID(),
		name: 'Jonh Doe',
	},
];
