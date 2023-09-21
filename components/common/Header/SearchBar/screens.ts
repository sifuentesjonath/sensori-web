export type AdvancedSearchResults =
	| 'patient'
	| 'report'
	| 'media'
	| 'session'
	| 'facility';

export interface IScreen {
	id: number;
	name: AdvancedSearchResults;
}

export const screens: IScreen[] = [
	{
		id: 0,
		name: 'patient',
	},
	{
		id: 1,
		name: 'report',
	},
	{
		id: 2,
		name: 'media',
	},
	{
		id: 3,
		name: 'session',
	},
	{
		id: 4,
		name: 'facility',
	},
];
