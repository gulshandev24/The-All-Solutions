import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Landingpage/Home';
import Loader from './Components/Utils/Loader';
import Navbar from './Components/Header/Navbar';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000); // Adjust the timeout duration as needed
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
