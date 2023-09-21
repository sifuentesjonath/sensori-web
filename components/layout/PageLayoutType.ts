import { ComponentWithChildrenType } from '@/types/common/react';
import { FC } from 'react';

export default interface PageWithLayout extends FC {
	Layout: ComponentWithChildrenType;
}
