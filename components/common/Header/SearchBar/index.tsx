import { FC, createContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';

import AdvancedSearch from './AdvancedSearch';
import SearchBarButton from './SearchBarButton/index';

export const VoiceSearchContext = createContext(false);

interface ISensSearchBarProps {}
const SearchBar: FC<ISensSearchBarProps> = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isVoiceSearch, setIsVoiceSearch] = useState(false);

	const close = () => {
		setIsVoiceSearch(false);
		setIsOpenModal(false);
	};

	const handleSearch = () => {
		setIsOpenModal(true);
	};
	const handleVoiceSearch = () => {
		setIsVoiceSearch(true);
		setIsOpenModal(true);
	};

	return (
		<>
			<SearchBarButton
				onClick={handleSearch}
				onVoiceSearchClick={handleVoiceSearch}
				hidden={isOpenModal}
			/>
			{isOpenModal && (
				<VoiceSearchContext.Provider value={isVoiceSearch}>
					<AdvancedSearch close={close} open={isOpenModal} />
				</VoiceSearchContext.Provider>
			)}
		</>
	);
};

export default SearchBar;
