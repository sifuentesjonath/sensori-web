import React from 'react';
import Image from 'next/image';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Card, Grid, Typography, Button } from '@mui/material';
import { fullViewButton } from '@screens/Patients/Profile/PatientProfile/Card/style';
import colorPalette from '@styles/color-palette';
import { experienceWidgetStyles } from '../styles';
import ExperienceImageMock from '@public/jpg/experienceMock.jpg';
import { greenButton } from '@styles/cssObjects/buttons';
import ChangeExperienceIcon from '@public/svg/360.svg';

export const ExperienceCard = () => {
	const handleChangeExperience = () => {
		alert('Used change experience button');
	};
	return (
		<Card sx={{ ...experienceWidgetStyles }}>
			<Grid display='flex' justifyContent='space-between' width='100%'>
				<Typography>{'Experience'}</Typography>
				<Button sx={{ ...fullViewButton }} endIcon={<KeyboardArrowRightIcon />}>
					{'Show All'}
				</Button>
			</Grid>
			<Grid width='fit-content'>
				<Image src={ExperienceImageMock} alt='experience-image' />
			</Grid>
			<Button
				sx={{ ...greenButton }}
				className='change-experience'
				startIcon={
					<Image src={ChangeExperienceIcon} alt='change-experience-image' />
				}
			>
				{'Change Experience'}
			</Button>
		</Card>
	);
};
