import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { GapiProvider } from './context/GapiContext';
import { DisplayProvider } from './context/DisplayContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <AuthContextProvider>
      <GapiProvider>
        <DisplayProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </DisplayProvider>
      </GapiProvider>
    </AuthContextProvider>

  </BrowserRouter>
);
