import { v4 } from 'uuid';

interface InputUpdateUser {
	id: string;
	register:
		| 'fullname'
		| 'email'
		| 'phone'
		| 'height'
		| 'weight'
		| 'sessions'
		| 'suscription'
		| 'location';
	label: string;
}

export const inpustUpdateUser: InputUpdateUser[] = [
	{
		id: v4(),
		register: 'fullname',
		label: 'Full Name',
	},
	{
		id: v4(),
		register: 'email',
		label: 'Email',
	},
	{
		id: v4(),
		register: 'phone',
		label: 'Phone',
	},
	{
		id: v4(),
		register: 'height',
		label: 'Height',
	},
	{
		id: v4(),
		register: 'weight',
		label: 'Weight',
	},
	{
		id: v4(),
		register: 'sessions',
		label: 'Sessions',
	},
	{
		id: v4(),
		register: 'suscription',
		label: 'Suscription Plan',
	},
	{
		id: v4(),
		register: 'location',
		label: 'Location',
	},
];
