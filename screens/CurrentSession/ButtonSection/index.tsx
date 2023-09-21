import React from 'react';
import { Box } from '@mui/material';
import { CurrentSessionButton } from '@components/element/buttons/CurrentSessionButton';
import { OpenSessionProgressButton } from '@components/element/buttons/SessionProgressButton';

export const ButtonsSection = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				gap: '12px',
			}}
		>
			<CurrentSessionButton variant='compress' />
			<OpenSessionProgressButton sx={{ width: '252px' }} />
		</Box>
	);
};
