import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
// import AppContext from "./context/AppContext";

import Profile from "./components/Profile";
import Header from "./components/Header";
// import Footer from "./components/footer";


function App() {

    var baseName = "/";
  return (
      <div className="App">


     
        <BrowserRouter basename={baseName}>
        {/* <ScrollToTop /> */}
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/header" element={<Header />} />
            </Routes>
        </BrowserRouter>
   
    </div>
  );
}

export default App;
