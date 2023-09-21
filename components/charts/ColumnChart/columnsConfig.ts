import colorPalette from '@styles/color-palette';
import { ApexOptions } from 'apexcharts';
import { labelTextColors } from '../../../screens/Patients/Profile/PatientProfile/Stats/mockupStat';

export const columnsChartData: ApexOptions[] = [
	{
		colors: [colorPalette.green, colorPalette.stroke.yellow],
		series: [
			{
				name: 'PRODUCT A',
				data: [25],
			},
			{
				name: 'PRODUCT A',
				data: [75],
			},
		],
		chart: {
			id: 'realtime',
			height: 350,
			type: 'bar',
			stacked: true,
			stackType: '100%',
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
		title: {
			text: 'Different Zones',
			align: 'left',
			offsetX: 36,
			style: {
				color: colorPalette.white,
			},
		},
		markers: {
			size: 0,
		},
		xaxis: {
			axisTicks: {
				show: false,
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
			categories: ['Low'],
		},
		yaxis: {
			labels: {
				show: false,
			},
		},
		legend: {
			show: false,
		},
		grid: {
			xaxis: {
				lines: {
					show: false,
				},
			},
			yaxis: {
				lines: {
					show: false,
				},
			},
		},
	},
	{
		colors: [colorPalette.green, colorPalette.stroke.yellow],
		series: [
			{
				name: 'PRODUCT A',
				data: [40],
			},
			{
				name: 'PRODUCT A',
				data: [60],
			},
		],
		chart: {
			id: 'realtime',
			height: 350,
			type: 'bar',
			stacked: true,
			stackType: '100%',
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
		markers: {
			size: 0,
		},
		xaxis: {
			axisTicks: {
				show: false,
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
			categories: ['Medium'],
		},
		yaxis: {
			labels: {
				show: false,
			},
		},
		legend: {
			show: false,
		},
		grid: {
			xaxis: {
				lines: {
					show: false,
				},
			},
			yaxis: {
				lines: {
					show: false,
				},
			},
		},
	},
	{
		colors: [colorPalette.green, colorPalette.stroke.yellow],
		series: [
			{
				name: 'PRODUCT A',
				data: [40],
			},
			{
				name: 'PRODUCT A',
				data: [60],
			},
		],
		chart: {
			id: 'realtime',
			height: 350,
			type: 'bar',
			stacked: true,
			stackType: '100%',
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
		markers: {
			size: 0,
		},
		xaxis: {
			axisTicks: {
				show: false,
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
			categories: ['High'],
		},
		yaxis: {
			labels: {
				show: false,
			},
		},
		legend: {
			show: false,
		},
		grid: {
			xaxis: {
				lines: {
					show: false,
				},
			},
			yaxis: {
				lines: {
					show: false,
				},
			},
		},
	},
];
