import colorPalette from '@styles/color-palette';
import { ApexOptions } from 'apexcharts';
import { randomInt } from 'crypto';

type Axis = {
	x: number;
	y: number;
};
const createDataHeart = () => {
	const dataAxisHeart: {
		x: number;
		y: number;
	}[] = [];
	let newAxis: {
		x: number;
		y: number;
	};
	let x: number;
	let y: number;
	for (let i = 1; i <= 100; i++) {
		x = i;
		y = Math.floor(Math.random() * (3100 - 1000 + 1)) + 1000;
		newAxis = { x, y };
		dataAxisHeart.push(newAxis);
	}
	return dataAxisHeart;
};

const dataHeart = createDataHeart();

export const heartChartData: ApexOptions = {
	colors: [colorPalette.green],
	series: [
		{
			name: 'Series 1',
			data: dataHeart,
		},
	],
	labels: ['0s', '10s', '20s'],
	chart: {
		id: 'realtime',
		height: 350,
		type: 'line',
		animations: {
			enabled: true,
			easing: 'linear',
			dynamicAnimation: {
				speed: 1000,
			},
		},
		foreColor: 'string',
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: 'straight',
		width: 1,
	},
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.5,
			opacityTo: 0.1,
			stops: [0, 100],
		},
	},
	title: {
		text: 'Heart Rate',
		align: 'left',
		offsetX: 40,
		style: {
			color: colorPalette.white,
		},
	},
	markers: {
		size: 0,
	},
	xaxis: {
		overwriteCategories: ['0s', '10s', '20s'],
		// categories: [
		// 	'0s',
		// 	'10s',
		// 	'20s',
		// 	// 	// '3s',
		// 	// 	// '4s', '5s', '7s', '8s', '9s', '10s', '11s', '12s', '13s', '14s', '15s', '16s', '17s', '18s', '19s', '20s',
		// ],
		min: 1,
		max: 100,
		tickAmount: 2,
		axisTicks: {
			show: true,
			color: colorPalette.textBlue,
		},
		axisBorder: {
			show: true,
			color: colorPalette.textBlue,
			strokeWidth: 3,
		},
		labels: {
			show: true,
			style: {
				colors: [
					colorPalette.textBlue,
					colorPalette.textBlue,
					colorPalette.textBlue,
				],
			},
		},
	},
	yaxis: {
		tickAmount: 5,
		showAlways: true,
		forceNiceScale: true,
		min: 0,
		max: 5000,
		axisTicks: {
			show: true,
			color: colorPalette.textBlue,
			width: 0,
		},
		axisBorder: {
			show: false,
		},
		labels: {
			show: true,
			style: {
				colors: [colorPalette.textBlue],
			},
		},
	},
	legend: {
		show: false,
	},
	grid: {
		show: true,
		borderColor: colorPalette.textBlue,
		position: 'back',
		strokeDashArray: 2,
		xaxis: {
			lines: {
				show: false,
				// offsetX: 10,
				// offsetY: 10,
			},
		},
		yaxis: {
			lines: {
				show: true,
			},
		},
	},
	theme: {
		monochrome: {
			color: colorPalette.textBlue,
		},
	},
};
