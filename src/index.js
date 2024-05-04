import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './components/reducers'; 
import localStorageMiddleware from './components/localStorageMiddleware';
import App from './App';

const initialState={
  tasks: JSON.parse(localStorage.getItem('tasks')) || []
};

const setupMiddleware=()=>{
  return [localStorageMiddleware];
};

const store=configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => setupMiddleware(),
  preloadedState: initialState
});

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
