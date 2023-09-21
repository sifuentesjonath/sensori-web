'use client';
import React from 'react';
import { Box } from '@mui/material';

import AcUnitIcon from '@mui/icons-material/AcUnit';

const UsersScreen = () => {
	return (
		<Box sx={{ zIndex: 10000000 }}>
			<AcUnitIcon
				sx={{
					color: 'white',
					fontSize: '200%',
				}}
			/>
		</Box>
	);
};

export default UsersScreen;
