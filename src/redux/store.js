import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // для збереження у localStorage
import { contactsReducer } from './contactsSlice.js';
import { filtersReducer } from './filtersSlice.js';
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items'], // Зберігаємо лише масив контактів
};

const rootReducer = combineReducers({
    contacts: persistReducer(persistConfig, contactsReducer),
    filters: filtersReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export const persistor = persistStore(store);
