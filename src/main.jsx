import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3251781230941397"
     crossorigin="anonymous"></script>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
)
