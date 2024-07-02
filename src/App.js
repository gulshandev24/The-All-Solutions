// import './App.css';
// import Home from './Components/Landingpage/Home';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* Add more routes here */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Landingpage/Home';

const App = () => {
  return (
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/" exact component={() => <div>Home</div>} />
    //       <Route path="/expertise" component={() => <div>Expertise</div>} />
    //       <Route path="/services" component={() => <div>Services</div>} />
    //       <Route path="/portfolio" component={() => <div>Portfolio</div>} />
    //       <Route path="/blog" component={() => <div>Blog</div>} />
    //       <Route path="/about" component={() => <div>About</div>} />
    //       <Route path="/contact" component={() => <div>Contact Us</div>} />
    //     </Switch>
    //   </div>
    // </Router>

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
