import colorPalette from '@styles/color-palette';
import { ApexOptions } from 'apexcharts';
import {
	categories,
	labelTextColors,
	mockupSeries,
	poligonsStrokeColors,
	strokeColors,
} from './mockupStat';

export const chartData: ApexOptions = {
	chart: {
		type: 'radar',
	},
	fill: {
		opacity: 0,
	},
	stroke: {
		show: true,
		width: 2,
		colors: strokeColors,
		dashArray: 0,
	},
	yaxis: {
		show: false,
	},
	xaxis: {
		categories: categories,
		labels: {
			show: true,
			style: {
				colors: labelTextColors,
				fontSize: '11px',
				fontFamily: 'Arial',
			},
		},
	},
	legend: {
		show: false,
	},
	plotOptions: {
		radar: {
			size: 80,
			offsetX: 7,
			offsetY: 16,
			polygons: {
				strokeColors: poligonsStrokeColors,
				// strokeWidth: ['#a8a8a8'],
				connectorColors: [colorPalette.textGray],
				fill: {
					colors: [colorPalette.buttonBlue],
				},
			},
		},
	},
	markers: {
		size: 0,
		showNullDataPoints: true,
	},
	series: mockupSeries,
	dataLabels: {
		background: {
			enabled: false,
		},
	},
};

export const chartDataMedium: ApexOptions = {
	chart: {
		type: 'radar',
	},
	fill: {
		opacity: 0,
	},
	stroke: {
		show: true,
		width: 2,
		colors: strokeColors,
		dashArray: 0,
	},
	yaxis: {
		show: false,
	},
	xaxis: {
		categories: categories,
		labels: {
			show: true,
			style: {
				colors: labelTextColors,
				fontSize: '11px',
				fontFamily: 'Arial',
			},
		},
	},
	legend: {
		show: false,
	},
	plotOptions: {
		radar: {
			size: 75,
			offsetX: 23,
			offsetY: 15,
			polygons: {
				strokeColors: poligonsStrokeColors,
				// strokeWidth: ['#a8a8a8'],
				connectorColors: [colorPalette.textGray],
				fill: {
					colors: [colorPalette.buttonBlue],
				},
			},
		},
	},
	markers: {
		size: 0,
		showNullDataPoints: true,
	},
	series: mockupSeries,
	dataLabels: {
		background: {
			enabled: false,
		},
	},
};

export const chartDataMediumView: ApexOptions = {
	chart: {
		type: 'radar',
	},
	fill: {
		opacity: 0,
	},
	stroke: {
		show: true,
		width: 2,
		colors: strokeColors,
		dashArray: 0,
	},
	yaxis: {
		show: false,
	},
	xaxis: {
		categories: categories,
		labels: {
			show: true,
			style: {
				colors: labelTextColors,
				fontSize: '11px',
				fontFamily: 'Arial',
			},
		},
	},
	legend: {
		show: false,
	},
	plotOptions: {
		radar: {
			size: 140,
			offsetX: 7,
			offsetY: 16,
			polygons: {
				strokeColors: poligonsStrokeColors,
				// strokeWidth: ['#a8a8a8'],
				connectorColors: [colorPalette.textGray],
				fill: {
					colors: [colorPalette.buttonBlue],
				},
			},
		},
	},
	markers: {
		size: 0,
		showNullDataPoints: true,
	},
	series: mockupSeries,
	dataLabels: {
		background: {
			enabled: false,
		},
	},
};

export const chartDataFullView: ApexOptions = {
	chart: {
		type: 'radar',
	},
	fill: {
		opacity: 0,
	},
	stroke: {
		show: true,
		width: 2,
		colors: strokeColors,
		dashArray: 0,
	},
	yaxis: {
		show: false,
	},
	xaxis: {
		categories: categories,
		labels: {
			show: true,
			style: {
				colors: labelTextColors,
				fontSize: '11px',
				fontFamily: 'Arial',
			},
		},
	},
	legend: {
		show: false,
	},
	plotOptions: {
		radar: {
			size: 200,
			offsetX: 7,
			offsetY: 16,
			polygons: {
				strokeColors: poligonsStrokeColors,
				// strokeWidth: ['#a8a8a8'],
				connectorColors: [colorPalette.textGray],
				fill: {
					colors: [colorPalette.buttonBlue],
				},
			},
		},
	},
	markers: {
		size: 0,
		showNullDataPoints: true,
	},
	series: mockupSeries,
	dataLabels: {
		background: {
			enabled: false,
		},
	},
};
