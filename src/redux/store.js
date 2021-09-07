// import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './phonebook/contacts-reducer';
import { authReducer } from './auth';
import { logger } from 'redux-logger';
import {
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }), logger, 
];

// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// };
// const rootReducer = combineReducers({
//     contacts: contactsReducer,
// });
// const store = createStore(rootReducer, composeWithDevTools());

const authPersistConfig = {
    key: 'auth',
    storage,
    blacklist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer, 
    },
    middleware,    
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
