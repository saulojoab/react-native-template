import { configureStore } from '@reduxjs/toolkit';
import { MockedReducer } from '../features';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedMockedReducer = persistReducer(persistConfig, MockedReducer);

const store = configureStore({
  reducer: {
    mockedReducer: persistedMockedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
export const persistor = persistStore(store);
