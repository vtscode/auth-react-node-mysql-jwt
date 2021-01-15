import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};
 
const pReducer = persistReducer(persistConfig, combineReducers({ ...reducers }));

export const store = createStore(pReducer);
export const persistor = persistStore(store);
export default store;