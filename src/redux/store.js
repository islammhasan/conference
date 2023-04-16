import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './index';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
