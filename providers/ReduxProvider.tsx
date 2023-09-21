'use client';
import { Provider } from 'react-redux';
import { ComponentWithChildrenType } from '@/types/common/react';
import { store } from '@redux/store';
import { persistStore } from 'redux-persist';

persistStore(store); //Persist the store

const ReduxProvider: ComponentWithChildrenType = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
