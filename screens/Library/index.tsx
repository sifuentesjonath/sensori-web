'use client';
import React, { useContext } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { AppContext } from '@/providers/AppProvider';

import LibraryDropZone from './LibraryDropzone';
import RecentFiles from './RecentFiles';
import MediaStats from './MediaStats';
import MediaLibrary from './MediaLibrary';

const LibraryScreen = () => {
	const { open } = useContext(AppContext);

	return (
		<Box
			sx={{
				// TODO: fix absolute positioning offset
				height: '83vh',
				left: open && 'calc(64px + 25px)',
				position: 'absolute',
				right: open ? 'calc( 240px + 64px + 25px)' : 'calc( (64px + 25px) * 2)',
				width: '68vw',
				overflowY: 'scroll',
				my: 3, // Temporary fix

				/**
				 * ----IMPORTANT TEMPORARY FIX ----
				 * Must be solved when fixed whit above TODO
				 */
				'&::-webkit-scrollbar': {
					width: '0.4em',
				},
				'&::-webkit-scrollbar-track': {
					boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
					webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
				},
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: 'rgba(0,0,0,.1)',
					// outline: '1px solid slategrey',
				},
			}}
		>
			<Grid container spacing={1}>
				<LibraryDropZone />
				<RecentFiles />
				<MediaStats />
				<MediaLibrary />
			</Grid>
		</Box>
	);
};

export default LibraryScreen;
