import { ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import './index.css';
import AuthProvider from './providers/auth';
import AppRoutes from './routes/AppRoutes';
import theme from './theme/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <ToastContainer autoClose={6000} />
            <AppRoutes />
          </ThemeProvider>
        </StyledEngineProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
