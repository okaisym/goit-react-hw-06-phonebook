import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { ThemeProvider } from '@emotion/react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';

const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    red: '#FF0000',
    blue: '#0000FF',
    beige: '#fcfcd5',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  
<React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </PersistGate>
  </Provider>
  </React.StrictMode>
);
