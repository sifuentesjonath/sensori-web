/**Mui Material */
import List from '@mui/material/List';
/**Components */
import SessionListItem from './SessionsListItem';
import files from './sample_file';
/**Utils */
import { v4 } from 'uuid';

const PatientSessionsList = () => {
	return (
		<List>
			{files.map((file) => (
				<>
					<SessionListItem file={file} key={v4()} />
				</>
			))}
		</List>
	);
};

export default PatientSessionsList;
