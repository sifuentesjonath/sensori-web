import GridView from '@mui/icons-material/GridView';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TimelineIcon from '@mui/icons-material/Timeline';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { paths } from '@/utils/paths';

export const sideBarMainNavItems = [
	// {
	// 	id: 'Dashboard',
	// 	url: `${paths.dashboard}`,
	// 	icon: GridView,
	// },
	{
		id: 'Sessions',
		url: `${paths.sessions}`,
		icon: ScheduleIcon,
	},
	// {
	// 	id: 'Activity',
	// 	url: `${paths.activity}`,
	// 	icon: TimelineIcon,
	// },
	{
		id: 'Library',
		url: `${paths.library}`,
		icon: FolderOutlinedIcon,
	},
	// {
	// 	id: 'Reports',
	// 	url: `${paths.reports}`,
	// 	icon: DescriptionOutlinedIcon,
	// },
	{
		id: 'Patients',
		url: `${paths.patients}`,
		icon: PeopleOutlinedIcon,
	},
	// {
	// 	id: 'Facilities',
	// 	url: `${paths.facilities}`,
	// 	icon: CorporateFareIcon,
	// },
	// {
	// 	id: 'Users',
	// 	url: `${paths.users}`,
	// 	icon: AccountCircleOutlinedIcon,
	// },
];
