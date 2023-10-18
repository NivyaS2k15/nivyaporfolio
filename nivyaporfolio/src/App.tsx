import React from 'react';
import './App.css';
import Portfolio from './Component/photo'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from './layout/layout';
import ContactForm from './contact/contact';




function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Portfolio />} />
            <Route path="/contact" element={<ContactForm />} />
          </Route>
      </Routes>
    </BrowserRouter >
  </>



  );

}

export default App;
