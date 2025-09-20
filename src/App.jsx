import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Agens from "./pages/Agens";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/common/Navbar";
import FullScreenNav from "./components/common/fullScreenNav";


const App = () => {

  
  return (
    <div className="">
       
   {/* <Navbar/> */}
  <FullScreenNav/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agens />} />

        <Route path="/projects" element={<Projects />} />
      </Routes> */}
    </div>
  );
};

export default App;
