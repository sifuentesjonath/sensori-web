import ReactApexChart from 'react-apexcharts';

import '@/styles/apexcharts/style.css';
import { chartData, chartDataFullView, chartDataMedium } from './RadarConfig';

interface IStatsPatientProps {
	size: 'sm' | 'md' | 'lg';
}

const StatsPatient = ({ size }: IStatsPatientProps) => {
	return (
		<>
			{size === 'sm' && (
				//@ts-ignore
				<ReactApexChart
					options={chartData}
					series={chartData.series}
					type='radar'
					height={224}
					width={212}
				/>
			)}
			{size === 'md' && (
				//@ts-ignore
				<ReactApexChart
					options={chartDataMedium}
					series={chartDataMedium.series}
					type='radar'
					height={218}
					width={252}
				/>
			)}
			{size === 'lg' && (
				//@ts-ignore
				<ReactApexChart
					options={chartDataFullView}
					series={chartData.series}
					type='radar'
					height={'100%'}
					width={'100%'}
				/>
			)}
		</>
	);
};

export default StatsPatient;
