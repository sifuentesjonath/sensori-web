'use client';
import '@/styles/common/normalize.css';
//Utils
import { paths } from '@utils/paths';
import { getUsertAuth } from '@redux/slices/user/user.selectors';
import { useSelector } from 'react-redux';
import { redirect } from 'next/navigation';

const SiteLayout = (props: { children: any }) => {
	const authStatus = useSelector(getUsertAuth);

	if (authStatus.Logged) {
		redirect(paths.sessions);
	}

	return <>{props.children}</>;
};

export default SiteLayout;
