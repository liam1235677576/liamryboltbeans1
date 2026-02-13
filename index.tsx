
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const initApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Could not find root element to mount to");
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error: any) {
    console.error("React Mounting Error:", error);
    rootElement.innerHTML = `
      <div class="min-h-screen flex items-center justify-center bg-slate-900 text-white p-4">
        <div class="text-center">
          <i class="fas fa-exclamation-triangle text-4xl text-amber-500 mb-4"></i>
          <h1 class="text-xl font-bold mb-2">Application Failed to Start</h1>
          <p class="text-slate-400 text-sm">${error?.message || 'Unknown error'}</p>
        </div>
      </div>
    `;
  }
};

initApp();
