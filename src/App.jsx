import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Becomesaler from "./Beseller/Becomesaler";
import InvestorHome from "./Investorpagecomponents/InvestorHome";
import Profile from "./Profile/Profile";
import "./App.css";
import SignUp from "./Profile/SignUp";


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/become-supplier" element={<Becomesaler />} />
        <Route path="/investor-relation" element={<InvestorHome/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
