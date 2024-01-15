import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';
import ReducerUser from './redux/Reducers';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, ReducerUser);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);



const root = createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

