'use client';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { lineData } from './lineChartConfig';

const LineChartWidget = () => {
	return (
		<>
			{/* @ts-ignore */}
			<ReactApexChart
				options={lineData}
				series={lineData.series}
				type='line'
				height={52}
				width={448}
			/>
		</>
	);
};

export default LineChartWidget;
