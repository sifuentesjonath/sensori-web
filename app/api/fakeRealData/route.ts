import moment from 'moment';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const currentDate = new Date();
	const randNumber = Math.floor(Math.random() * 100);
	const showDate = moment(currentDate).format('ss');
	const doc = {
		time: showDate,
		bid: randNumber,
	};

	return NextResponse.json(doc);
}

export async function POST(request: Request) {
	return new Response('Hello with POST', {
		status: 200,
	});
}
