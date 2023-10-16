import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer, filterReducer } from './reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filterText: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = devToolsEnhancer();

const store = createStore(persistedReducer, enhancer);

const persistor = persistStore(store);

export { store, persistor };
