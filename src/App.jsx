import './App.css';
import Dashboardpage from './Components/Dashboardpage'
import Locationpage from './Components/Locationpage'
import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
// import Theatreselection from './Components/Theatreselection';
import JsonData from "./movie.json";
import Loginpage from './Components/Loginpage';
import Signuppage from './Components/Signuppage';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
          {/* <Route path="/dashboard" element={<Dashboardpage/>} /> */}
          <Route path="/dashboard/:selectedCity" element={<Dashboardpage/>} />
          <Route path="/Locationpage" element={<Locationpage  />} />
          {/* <Route path="/Theatreselection" element={<Theatreselection />} /> */}
          {/* <Route path="*" element={<Theatreselection />} /> */}
          <Route path="/" element={<Loginpage/>}/>
          <Route path="/Signuppage" element={<Signuppage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
