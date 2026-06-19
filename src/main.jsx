import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
// import React from 'react'
// import ReactDOM from "react-dom/client";
// import { routerProvider } from "react-router-dom";
// import { router } from './routes/router.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Routes> */}
        <App />
      {/* </Routes> */}
    </BrowserRouter>
  </StrictMode>
)
