'use client';
import React from 'react';
import ScreenAdvisor from '@components/block/ScreenAdvisor';
import RestorePasswordForm from '@components/form/RestorePasswordForm';
import ButtonBack from '@components/element/buttons/ButtonBack';

const RestorePasswordScreen = () => {
	return (
		<ScreenAdvisor
			type={'success'}
			title={'Restore your password'}
			description={
				'Introduce your email and we will send you a link to restore your password'
			}
		>
			<RestorePasswordForm />
			<ButtonBack />
		</ScreenAdvisor>
	);
};

export default RestorePasswordScreen;
