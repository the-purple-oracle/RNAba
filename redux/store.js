import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

import User from './reducers/User';
import Clients from './reducers/Clients';
import Sessions from './reducers/Sessions';
import ActiveSession from './reducers/ActiveSession';

const rootReducer = combineReducers({
  user: User,
  clients: Clients,
  sessions: Sessions,
  activeSession: ActiveSession,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({serializableCheck: false});
  },
});

export default store;

export const persistor = persistStore(store);

//To empty out persisted data
// persistor.purge();
