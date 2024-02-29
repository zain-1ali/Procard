import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './Redux/config/store-config';
import { CssBaseline } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { AppProvider } from './context/newContext';
// import i18next from './i18next';
import { Suspense } from 'react';
import './i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline />
        <AppProvider>
          {/* <Suspense fallback={(<div>Loading...</div>)}> */}
          <App />
        </AppProvider>
        {/* </Suspense> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();