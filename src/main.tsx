import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./assets/styles/global.scss"
import "./assets/styles/media-query/query1085px.scss"
import "./assets/styles/media-query/query-375px.scss"
import "./assets/styles/media-query/query-400px.scss"
import "./assets/styles/media-query/query-425px.scss"
import "./assets/styles/media-query/query485px.scss"
import "./assets/styles/media-query/query710px.scss"
import "./assets/styles/media-query/query2560px.scss"
import "./assets/styles/media-query/query1343-1085px.scss"
import "./assets/styles/media-query/query-1343minpx.scss"
import AppEnglish from './AppEnglish';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/english" element={<AppEnglish />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)