'use client';
import React from 'react';

import ScreenAdvisor from '@components/block/ScreenAdvisor';
import { useRouter } from 'next/navigation';
import { paths } from '@utils/paths';
interface IVerifiedEmailScreen {
	variant: 'password' | 'account';
}

const VerifiedEmailScreen = ({ variant }: IVerifiedEmailScreen) => {
	const router = useRouter();

	setTimeout(() => {
		router.replace(paths.login);
	}, 5000);

	return (
		<ScreenAdvisor
			type='success'
			title={'Check your Email'}
			description={
				variant === 'password'
					? 'We sent an email with the password reset link'
					: 'Please Verify your email, we sent you a link to do this'
			}
		/>
	);
};

export default VerifiedEmailScreen;
