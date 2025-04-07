import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/notfound.css";
import "./styles/main.css";
import Navigasi from './utils/router/Navigasi.jsx'
import { Provider } from 'react-redux';
import { store, persistor } from './store/index.jsx';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigasi />
      </PersistGate>
    </Provider>
  </StrictMode>
)
