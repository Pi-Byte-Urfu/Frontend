import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import Store from './store/store';
import { createContext } from 'vm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const store = new Store();
export const AuthContext = React.createContext<Store>(store)

root.render(
  <AuthContext.Provider value={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </AuthContext.Provider>
);

  


