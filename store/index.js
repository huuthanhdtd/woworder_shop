import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlaware = [sagaMiddleware];

const authPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'customer'],
};

export const store = createStore(
  persistCombineReducers(authPersistConfig, rootReducer),
  applyMiddleware(...middlaware)
);

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default { store, persistor };
