import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Landingpage/Home';

const App = () => {
  return (
    <>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
