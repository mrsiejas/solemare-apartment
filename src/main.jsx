import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { Toaster } from '@/components/ui/toaster';
import { ToastProvider } from '@/components/ui/toast'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
      <Toaster />
    </ToastProvider>
  </React.StrictMode>
);