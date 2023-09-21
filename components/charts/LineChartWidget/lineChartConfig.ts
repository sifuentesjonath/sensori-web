import colorPalette from '@styles/color-palette';
import { ApexOptions } from 'apexcharts';

export const lineData: ApexOptions = {
	chart: {
		type: 'line',
		height: '400px',
		width: '100%',
		background: colorPalette.textBlueStrong,
		toolbar: {
			show: false,
		},
	},
	colors: [colorPalette.green, colorPalette.series.yellow],
	grid: {
		//Lines of the background chart
		show: false,
		xaxis: {
			lines: {
				show: false,
				offsetY: -10,
			},
		},
	},
	//Lines of medition
	stroke: {
		curve: 'smooth',
		width: 2, // Cambia el ancho de las líneas
		// colors: ['green', 'yellow'], // Cambia los colores de las líneas del gráfico
	},
	legend: {
		show: false,
	},
	yaxis: {
		show: true,
		min: 1,
		max: 30,
		labels: {
			show: false,
		},
	},
	xaxis: {
		min: 1,
		max: 6,
		labels: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
		tooltip: {
			enabled: false,
		},
	},
	tooltip: {
		enabled: false,
	},
	series: [
		{ data: [10, 30, 30, 30, 30, 30, 30, 30, 30, 12, 13, 0] },
		{
			data: [
				30, 12, 12, 12, 13, 18, 30, 12, 12, 12, 13, 18, 30, 12, 12, 12, 13, 18,
			],
		},
	],
};
