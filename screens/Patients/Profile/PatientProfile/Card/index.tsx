/**React */
import React from 'react';
/**Next */
import Image from 'next/image';
/**Redux */
import { useSelector } from 'react-redux';
import { getUserPatientState } from '@redux/slices/userPatients/userPatients.selectors';
/**Mui Material */
import { Card, CardContent, Paper, Typography, Box } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
/**Styles */
import {
	cardStyle,
	fullViewButton,
	textData,
	cardStyleCurrentSession,
} from './style';
/**Components */
import { Button } from '@components/element/Button';
import StatsPatient from '../Stats';
/**Utils */
import { v4 } from 'uuid';
import UserImage from '@public/svg/MockupProfile.svg';
interface IPatientCard {
	onClick?: () => void;
	isInCurrentSession?: boolean;
}

const PatientCard = ({ onClick, isInCurrentSession = false }: IPatientCard) => {
	const { Name, Height, Weight } = useSelector(getUserPatientState);

	//TODO: How we will get this data?
	const patientDataMockup = [
		{
			id: v4(),
			variant: 'Name:',
			value: 'John Doe',
		},
		{
			id: v4(),
			variant: 'Age:',
			//TODO: Add this property in the patientState
			value: '42',
		},
		{
			id: v4(),
			variant: 'Height:',
			value: '178cm',
		},
		{
			id: v4(),
			variant: 'Weight:',
			value: '74kg',
		},
	];

	return (
		<Card
			sx={{
				...(!isInCurrentSession && { ...cardStyle }),
				...(isInCurrentSession && { ...cardStyleCurrentSession }),
			}}
		>
			<CardContent>
				<Button
					type='button'
					variant='text'
					color='primary'
					sx={{ ...fullViewButton, ...(isInCurrentSession && { top: '8px' }) }}
					endIcon={<KeyboardArrowRightIcon />}
					// TODO: Create state redux to know when close the modal
					onClick={onClick}
				>
					Full Profile
				</Button>
				<Typography sx={{ ...textData }}>{'Patient:'}</Typography>
				<Box sx={{ paddingLeft: '8px' }}>
					<Image src={UserImage} alt={'user-profile-photo'} />
				</Box>
				{patientDataMockup.map(({ id, variant, value }) => (
					<Typography
						key={id}
						sx={{ paddingLeft: variant === 'age' ? '23px' : '8px' }}
					>
						{variant}
						<Typography sx={{ ...textData }}>{`   ${value}`}</Typography>
					</Typography>
				))}
				<Paper>
					{!isInCurrentSession && <StatsPatient size='sm' />}
					{isInCurrentSession && <StatsPatient size='md' />}
				</Paper>
			</CardContent>
		</Card>
	);
};

export default PatientCard;
