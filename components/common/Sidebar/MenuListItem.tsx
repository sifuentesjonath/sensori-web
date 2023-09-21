import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { listItem } from './style';
import {
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListItem,
} from '@mui/material';

interface MenuListItemProps {
	id: string;
	icon: any;
	open: boolean;
	path: string;
}

export const MenuListItem = ({ id, icon, open, path }: MenuListItemProps) => {
	const Icon = icon;

	const pathname = usePathname();

	/** Removing trailing slash UNIQUELY for "/app/" path */
	const sanitizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
	return (
		<Link
			href={path}
			prefetch={true}
			style={{
				textDecoration: 'none',
			}}
		>
			<ListItem
				key={id}
				sx={{
					...listItem,
				}}
			>
				<ListItemButton selected={pathname === sanitizedPath}>
					<ListItemIcon>
						<Icon />
					</ListItemIcon>
					{open && <ListItemText primary={id} />}
				</ListItemButton>
			</ListItem>
		</Link>
	);
};
