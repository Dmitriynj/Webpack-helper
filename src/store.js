import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos } from './todos/reducers';
import { messenger } from './shared/reducers';

const reducers = {
  todos,
  messenger,
};

// this obj tells redux-persist how to save
// and where to store app data
const persistConfig = {
  key: 'root',
  storage, // this default local storage on the web
  // tells redux-persist how to reconcile the initial and stored state
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
