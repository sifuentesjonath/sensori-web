import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import colorPalette from '@styles/color-palette';

import '@/styles/apexcharts/style.css';
import Box from '@mui/material/Box';

const StatsPie = () => {
	const chartData: ApexOptions = {
		chart: {
			fontFamily: 'inherit',
		},
		plotOptions: {
			pie: {
				donut: {
					labels: {
						show: true,
						value: {
							fontSize: '32px',
							color: colorPalette.textBlue,
							fontWeight: 500,
						},
						total: {
							show: true,
							color: colorPalette.white,
						},
					},
				},
				startAngle: 90, // Seems not to work as expected, pls try 225 "that would look like Figma design"
			},
		},
		series: [328, 82, 12, 51],
		labels: ['Uploaded', 'Favorite', 'Tagged', 'Deleted'],
		dataLabels: {
			enabled: false,
		},
		legend: {
			colors: colorPalette.white,
			fontSize: '10px',
			// @ts-ignore Linter complains about params, but it works just fine
			formatter(legendName, opts) {
				return [legendName, '', opts.w.globals.series[opts.seriesIndex]];
			},
			fontWeight: 500,

			markers: {
				radius: 0,
			},
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: 'bottom',
					},
				},
			},
		],
	};

	return (
		// <Box
		//   // display="flex"
		//   // flexDirection="start"
		//   // justifyContent="center"
		//   // flexGrow={1}
		// >
		<ReactApexChart
			options={chartData}
			series={chartData.series}
			type='donut'
			height={160}
		/>
		// </Box>
	);
};

export default StatsPie;
