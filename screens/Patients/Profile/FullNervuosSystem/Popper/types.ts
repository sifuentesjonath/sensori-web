import { CSSObject } from '@emotion/react';
import { ImageLoaderProps } from 'next/image';

interface Coordinates {
	down?: number;
	left?: number;
	right?: number;
}

export interface PositionPopper {
	up?: number;
	right?: number;
	down?: number;
	left?: number;
}

export type Placement =
	| 'auto-end'
	| 'auto-start'
	| 'auto'
	| 'bottom-end'
	| 'bottom-start'
	| 'bottom'
	| 'left-end'
	| 'left-start'
	| 'left'
	| 'right-end'
	| 'right-start'
	| 'right'
	| 'top-end'
	| 'top-start'
	| 'top';
export interface ISystemPopperProps {
	title: string;
	description: string;
	coordinates?: Coordinates;
	placement?: Placement;
	popperPosition?: PositionPopper;
	sx?: CSSObject;
	image?: ImageLoaderProps;
	buttonImage?: ImageLoaderProps;
	variant?: 'button' | 'icon';
	status?: 'safe' | 'warning' | 'danger';
}

export const initialPosition: PositionPopper = {
	up: 0,
	right: 0,
	down: 0,
	left: 0,
};
