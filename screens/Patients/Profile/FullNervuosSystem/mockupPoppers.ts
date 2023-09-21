import HeartIcon from '@public/svg/Heart.svg';
import KidneyIcon from '@public/svg/Kidneys.svg';
import EyeIcon from '@public/svg/eyeIcon.svg';
import ThyroidIcon from '@public/svg/thyroid .svg';
import WhiteHeartIcon from '@public/svg/whiteHeart.svg';
import RedHeartIcon from '@public/svg/redHeart.svg';
import LungsIcon from '@public/svg/lungs.svg';
import LiverIcon from '@public/svg/liver.svg';
import StomachIcon from '@public/svg/stomach.svg';
import WhiteKidneys from '@public/svg/whiteKidneys.svg';
import IntestineIcon from '@public/svg/intestine.svg';

import { ISystemPopperProps } from './Popper/types';

export const mockupPopperFirstView: ISystemPopperProps[] = [
	{
		title: 'Hearth Ache',
		description: 'Pressure, fullness, burning or tightness in teh chest',
		coordinates: { down: 4, left: 0.5 },
		placement: 'auto',
		popperPosition: { up: 0, left: 0, right: 0, down: 0 },
		image: ThyroidIcon,
	},
	{
		title: 'Hearth Ache',
		description: 'Pressure, fullness, burning or tightness in teh chest',
		coordinates: { down: 8, right: 5.5 },
		placement: 'right',
		popperPosition: { up: 3, left: 0, right: 4, down: 0 },
		image: HeartIcon,
	},
	{
		title: 'Kidney Ache',
		description:
			'Usually felt in your back (under the ribs, to the right or left of the spine)',
		coordinates: { down: 12, left: 6 },
		placement: 'auto',
		popperPosition: { up: 0, left: 2, right: 0, down: 14 },
		image: { src: KidneyIcon, width: 20 },
	},
];

export const mockupPopperSecondView: ISystemPopperProps[] = [
	{
		title: 'Hearth Ache',
		description: 'Pressure, fullness, burning or tightness in teh chest',
		coordinates: { down: -0.5, left: 3 },
		placement: 'auto',
		popperPosition: { up: 0, left: 0, right: 0, down: 0 },
		buttonImage: EyeIcon,
		image: EyeIcon,
	},
	{
		title: 'Hearth Ache',
		description: 'Pressure, fullness, burning or tightness in teh chest',
		coordinates: { down: 3, left: 1 },
		placement: 'right',
		popperPosition: { up: 3, left: 0, right: 4, down: 0 },
		buttonImage: ThyroidIcon,
		image: ThyroidIcon,
	},
	{
		title: 'Hearth Ache',
		description: 'Pressure, fullness, burning or tightness in teh chest',
		coordinates: { down: 7, right: 5 },
		placement: 'right',
		popperPosition: { up: 3, left: 0, right: 4, down: 0 },
		buttonImage: WhiteHeartIcon,
		image: RedHeartIcon,
		status: 'danger',
	},
	{
		title: 'Hearth Ache',
		description: 'Pressure, fullness, burning or tightness in teh chest',
		coordinates: { down: 8.2, left: 4.6 },
		placement: 'right',
		popperPosition: { up: 3, left: 0, right: 4, down: 0 },
		buttonImage: LungsIcon,
		image: LungsIcon,
	},
	{
		title: 'Hearth Ache',
		description: 'Pressure, fullness, burning or tightness in teh chest',
		coordinates: { down: 11, left: 2.6 },
		placement: 'right',
		popperPosition: { up: 3, left: 0, right: 4, down: 0 },
		buttonImage: LiverIcon,
		image: LiverIcon,
	},
	{
		title: 'Hearth Ache',
		description: 'Pressure, fullness, burning or tightness in teh chest',
		coordinates: { down: 12.7, right: 5 },
		placement: 'right',
		popperPosition: { up: 3, left: 0, right: 4, down: 0 },
		buttonImage: StomachIcon,
		image: StomachIcon,
	},
	{
		title: 'Hearth Ache',
		description: 'Pressure, fullness, burning or tightness in teh chest',
		coordinates: { down: 13.5, left: 8 },
		placement: 'left-end',
		popperPosition: { up: 0, left: 0, right: 0, down: 30 },
		buttonImage: WhiteKidneys,
		image: KidneyIcon,
		status: 'warning',
	},
	{
		title: 'Hearth Ache',
		description: 'Pressure, fullness, burning or tightness in teh chest',
		coordinates: { down: 15, left: 0.5 },
		placement: 'right',
		popperPosition: { up: 0, left: 0, right: 4, down: 10 },
		buttonImage: IntestineIcon,
		image: IntestineIcon,
	},
];
