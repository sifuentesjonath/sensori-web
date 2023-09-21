import Image from 'next/image';
import {
	Box,
	Grid,
	IconButton,
	Typography,
	Input as MuiInput,
	useTheme,
} from '@mui/material';
import { SubmitHandler } from 'react-hook-form';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import useUpdatePatientForm, {
	IUseUpdatePatientFormProps,
} from '@hooks/form/useUpdatePatientForm';

import { Input } from '@components/element/Input';
import { Button } from '@components/element/Button';

import MockupImage from '@public/svg/MockupProfile.svg';
import DeleteIcon from '@public/svg/trash-alt.svg';
import colorPalette from '@styles/color-palette';

import { inpustUpdateUser } from './inputs';
import {
	deleteButtonStyle,
	inputStyle,
	saveButtonStyle,
	selectImageBtn,
	updateUserFormStyle,
} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { scrollStyleRemoval } from '@screens/Library/style';
import { setUserPatientState } from '@redux/slices/userPatients/userPatients.actions';
import { getUserPatientState } from '@redux/slices/userPatients/userPatients.selectors';

const UpdatePatientForm = () => {
	const theme = useTheme();
	const { Suscription } = useSelector(getUserPatientState);
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useUpdatePatientForm();

	const onSubmit: SubmitHandler<IUseUpdatePatientFormProps> = ({
		fullname,
		email,
		phone,
		height,
		weight,
		sessions,
		suscription,
		location,
	}) => {
		alert(
			`Nombre: ${fullname}
Email: ${email}
Phone: ${phone}
Height: ${height}
Weight: ${weight}
Session: ${sessions}
Suscription: ${suscription}
Location: ${location}`
		);
		dispatch(
			setUserPatientState({
				Name: fullname,
				Email: email,
				Phone: phone,
				Height: height,
				Weight: weight,
				Sessions: sessions,
				Suscription: suscription,
				Location: location,
			})
		);
	};

	return (
		<Grid
			container
			component='form'
			sx={{
				...updateUserFormStyle,
				[theme.breakpoints.between(600, 1142)]: {
					maxWidth: '52vw',
					width: 'auto',
				},
				[theme.breakpoints.up(1800)]: {
					maxWidth: '40em',
				},
				// [theme.breakpoints.between(980, 1326)]: {
				// 	height: 'fit-content',
				// },
			}}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Typography
				sx={{
					color: colorPalette.white,
					fontWeight: 600,
					position: 'relative',
				}}
			>
				Patient Profile
			</Typography>
			<Grid
				item
				sx={{
					display: 'flex',
					gap: '20px',
					alignItems: 'center',
					[theme.breakpoints.down(400)]: {
						gap: '8px',
					},
				}}
			>
				<Box>
					{/* TODO: Create this in a new component & add controller to be able managed whit react-form-hooks */}
					<IconButton component='label' sx={{ ...selectImageBtn }}>
						<Image src={MockupImage} alt={'mockup-image'} />
						<Box className='overlay'>
							<CameraAltOutlinedIcon
								sx={{
									color: colorPalette.green,
									width: '0.8em',
									height: '0.8em',
								}}
							/>
						</Box>
						<MuiInput hidden type='file' sx={{ display: 'none' }}></MuiInput>
					</IconButton>
				</Box>
				<Box
					sx={{
						display: 'flex',
						gap: '1em',
						//TODO:  Create constant
						[theme.breakpoints.between(320, 792)]: {
							display: 'flex',
							flexDirection: 'column',
							gap: '12px',
						},
					}}
				>
					<Button type='submit' sx={{ ...saveButtonStyle }}>
						Save
					</Button>
					<Button
						sx={{
							...deleteButtonStyle,
							[theme.breakpoints.down('md')]: {
								width: '96px',
								minWidth: '3rem',
							},
						}}
						onClick={() => alert('Delete button')}
						startIcon={<Image src={DeleteIcon} alt='delete' />}
					>
						Delete
					</Button>
				</Box>
			</Grid>
			<Grid
				item
				sx={{
					...scrollStyleRemoval,
					display: 'flex',
					flexWrap: 'wrap',
					gap: '28px',
					overflowY: 'scroll',
					height: '388px',
					[theme.breakpoints.between(320, 1059)]: {
						width: '16em',
					},
					[theme.breakpoints.between(1059, 1142)]: {
						width: '34em',
					},
				}}
			>
				{inpustUpdateUser.map((input) => {
					const { id, label } = input;

					return (
						<Box
							key={id}
							sx={{
								...inputStyle,
								[theme.breakpoints.down(400)]: {
									'& .MuiFormControl-root.MuiTextField-root': {
										width: '212px',
										height: '48px',
									},
									'& .MuiButton-root': {
										width: '212px',
										height: '48px',
									},
								},
							}}
						>
							<Typography>{label}</Typography>
							{input.register === 'suscription' && (
								<Button
									startIcon={
										<CheckCircleOutlineIcon
											sx={{ color: colorPalette.green }}
										/>
									}
								>
									{/* TODO: CHANGE This is only per now */}
									{'Active'}
								</Button>
							)}
							{input.register !== 'suscription' && (
								<Input
									name={input.register}
									control={control}
									sx={{ width: '658px' }}
									errorMessage={errors[input.register]?.message}
									{...register(input.register)}
								/>
							)}
						</Box>
					);
				})}
			</Grid>
		</Grid>
	);
};

export default UpdatePatientForm;
