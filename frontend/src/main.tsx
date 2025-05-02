import './index.css'
import App from './App.tsx'
import { AuthProvider } from './Contexts/auth_context.tsx'
import React from "react";
import ReactDOM from "react-dom/client";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);