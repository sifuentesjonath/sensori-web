'use client';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, CSSObject } from '@mui/material';
import { heartChartData } from './heartConfig';

interface HeartRealTimeProps {
	sx?: CSSObject;
}

export const HeartRealTime = ({ sx }: HeartRealTimeProps) => {
	return (
		<Box sx={{ ...sx }}>
			{/* @ts-ignore */}
			<ReactApexChart
				options={heartChartData}
				series={heartChartData.series}
				type='area'
				height={418}
				width={456}
			/>
		</Box>
	);
};
