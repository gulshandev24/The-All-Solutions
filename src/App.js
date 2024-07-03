// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Components/Landingpage/Home';
// import Loader from './Components/Utils/Loader'

// const App = () => {
//   return (
//     <>
//           <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* Add more routes here */}
//       </Routes>
//     </BrowserRouter>
//     </>
//   );
// };

// export default App;



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
    }, 3000); // Adjust the timeout duration as needed
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
