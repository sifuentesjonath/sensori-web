'use client';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { smoothnessChartData } from './smoothnessConfig';
import { Box, CSSObject } from '@mui/material';

interface SmoothnessRealTimeProps {
	sx?: CSSObject;
}

export const SmoothnessRealTime = ({ sx }: SmoothnessRealTimeProps) => {
	return (
		<Box sx={{ ...sx }}>
			{/* @ts-ignore */}
			<ReactApexChart
				options={smoothnessChartData}
				series={smoothnessChartData.series}
				type='line'
				height={418}
				width={936}
			/>
		</Box>
	);
};
