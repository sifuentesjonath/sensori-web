import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Grid } from '@mui/material';
import LogoImage from '@public/svg/sensorium-logo.svg';
import LogoBlue from '@public/svg/logo-blue.svg';
import { paths } from '@utils/paths';
interface ILogoProps {
	variant?: 'white' | 'blue';
	href?: string;
}

const Logo = ({ variant = 'white', href = paths.login }: ILogoProps) => {
	return (
		<Link href={href}>
			<Grid>
				{variant === 'white' && (
					<Image src={LogoImage} alt={'sensorium-icon'} />
				)}
				{variant === 'blue' && <Image src={LogoBlue} alt={'sensorium-icon'} />}
			</Grid>
		</Link>
	);
};

export default Logo;
