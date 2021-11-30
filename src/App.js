// import React from 'react';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as bootstrap from 'bootstrap';


import 'bootstrap';
function App() {
  return (
    <BrowserRouter>

      <AppRouter />

      </BrowserRouter>

  );
}

export default App;
