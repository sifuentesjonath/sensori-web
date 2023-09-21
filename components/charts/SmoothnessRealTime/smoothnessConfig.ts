import { TurnedIn } from '@mui/icons-material';
import colorPalette from '@styles/color-palette';
import { ApexOptions } from 'apexcharts';
import moment from 'moment';

const greenMockupSeriesData = [
	49, 43, 40, 41, 45, 25, 39, 34, 39, 31, 28, 20, 18, 20, 15,
];
const yellowMockupSeriesData = [
	9, 10, 11, 12, 6, 13, 11, 15, 11, 29, 28, 21, 19, 21, 25,
];
const createArray = (array: number[], value: number) => {
	const newArray = array.map((number) => {
		return number + value;
	});
	return newArray;
};

export const smoothnessChartData: ApexOptions = {
	colors: [
		colorPalette.green,
		colorPalette.green,
		colorPalette.green,
		colorPalette.green,
		colorPalette.series.yellow,
		colorPalette.series.yellow,
		colorPalette.series.yellow,
		colorPalette.series.yellow,
	],
	series: [
		{
			name: 'Series 1',
			data: createArray(greenMockupSeriesData, 6),
		},
		{
			data: createArray(greenMockupSeriesData, 4),
		},
		{
			data: createArray(greenMockupSeriesData, 2),
		},
		{
			data: greenMockupSeriesData,
		},
		{
			name: 'Series 1',
			data: createArray(yellowMockupSeriesData, 6),
		},
		{
			data: createArray(yellowMockupSeriesData, 4),
		},
		{
			data: createArray(yellowMockupSeriesData, 2),
		},
		{
			data: yellowMockupSeriesData,
		},
	],
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
		curve: 'smooth',
		width: 3,
	},
	title: {
		text: 'Smoothness',
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
		categories: [
			'0:01',
			'0:02',
			'0:03',
			'0:04',
			'0:05',
			'0:06',
			'0:07',
			'0:08',
			'0:09',
			'0:10',
			'0:11',
			'0:12',
			'0:13',
			'0:14',
			'0:15',
		],
		min: 1,
		max: 15,
		tickAmount: 15,
		axisTicks: {
			show: true,
			color: colorPalette.textBlueStrong,
		},
		axisBorder: {
			show: true,
			color: colorPalette.textBlue,
			strokeWidth: 1,
		},
		labels: {
			show: true,
			style: {
				colors: [
					colorPalette.textBlue,
					colorPalette.textBlue,
					colorPalette.textBlue,
					colorPalette.textBlue,
					colorPalette.textBlue,
					colorPalette.textBlue,
					colorPalette.textBlue,
					colorPalette.textBlue,
					colorPalette.textBlue,
					colorPalette.textBlue,
					colorPalette.textBlue,
					colorPalette.textBlue,
					colorPalette.textBlue,
					colorPalette.textBlue,
					colorPalette.textBlue,
					colorPalette.textBlue,
				],
			},
		},
	},
	yaxis: {
		tickAmount: 6,
		showAlways: true,
		forceNiceScale: true,
		max: 60,
		axisTicks: {
			show: true,
			color: colorPalette.textBlue,
			width: 0,
			offsetX: 10,
		},
		axisBorder: {
			show: true,
			color: colorPalette.textBlue,
		},
		labels: {
			show: false,
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
		borderColor: colorPalette.textBlueStrong,
		position: 'back',
		strokeDashArray: 6,
		xaxis: {
			lines: {
				show: true,
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
