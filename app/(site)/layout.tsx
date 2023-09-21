import { ComponentWithChildrenType } from '@/types/common/react';
import SiteLayout from '@components/layout/SiteLayout';

const Site: ComponentWithChildrenType = ({ children }) => {
	return <SiteLayout>{children}</SiteLayout>;
};

export default Site;
