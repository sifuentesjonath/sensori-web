'use client';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import colorPalette from '@styles/color-palette';
import { ApexOptions } from 'apexcharts';
import { Box, CSSObject, Typography, Container } from '@mui/material';

interface IColumnsProps {
	sx?: CSSObject;
	low?: number;
	medium?: number;
	high?: number;
}

export const ColumnsChart = ({ sx, low, medium, high }: IColumnsProps) => {
	const columnsChartData: ApexOptions[] = [
		{
			colors: [colorPalette.series.yellow, colorPalette.column.yellowOpacity],
			series: [
				{
					name: 'PRODUCT A',
					data: [low],
				},
				{
					name: 'PRODUCT A',
					data: [100 - low],
				},
			],
			chart: {
				id: 'low',
				height: 350,
				width: '100%',
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
			colors: [colorPalette.column.blue, colorPalette.column.blueOpacity],
			series: [
				{
					name: 'PRODUCT A',
					data: [medium],
				},
				{
					name: 'PRODUCT A',
					data: [100 - medium],
				},
			],
			chart: {
				id: 'medium',
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
			colors: [colorPalette.column.green, colorPalette.column.greenOpacity],
			series: [
				{
					name: 'PRODUCT A',
					data: [high],
				},
				{
					name: 'PRODUCT A',
					data: [100 - high],
				},
			],
			chart: {
				id: 'high',
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
				max: 100,
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
	return (
		<Container sx={{ display: 'flex', flexDirection: 'column' }}>
			<Typography
				sx={{
					fontSize: '14px',
					fontWeight: 600,
					color: colorPalette.white,
					paddingLeft: '2rem',
				}}
			>
				Different Zones
			</Typography>
			<Box sx={{ ...sx, display: 'flex' }}>
				{/* @ts-ignore */}
				{columnsChartData.map((column) => (
					<Box>
						<Typography
							sx={{
								fontSize: '14px',
								fontWeight: 600,
								color: colorPalette.white,
								paddingLeft: '2rem',
								position: 'relative',
								top: '20px',
								left: '2.2rem',
							}}
						>
							{column.chart.id === 'low'
								? `${low}%`
								: column.chart.id === 'medium'
								? `${medium}%`
								: `${high}%`}
						</Typography>
						<ReactApexChart
							options={column}
							series={column.series}
							type='bar'
							height={378}
							width={160}
						/>
					</Box>
				))}
			</Box>
		</Container>
	);
};
