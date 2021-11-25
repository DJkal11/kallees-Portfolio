
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Welcome from './components/welcome';
import Explore from './components/explore';
import Summon from './components/summon';
import Help from './components/help';
import Community from './components/community-links';
import { useState } from 'react';


function App() {

  const [ border1, setBorder1 ] = useState(true);
  const [ border2, setBorder2 ] = useState(false);
  const [ border3, setBorder3 ] = useState(false);

  function handleClickWelcome() {
    setBorder1(true);
    setBorder2(false);
    setBorder3(false);
  }

  function handleClickCryptobank() {
    setBorder1(false);
    setBorder2(true);
    setBorder3(false);
  }

  function handleClickExchange() {
    setBorder1(false);
    setBorder2(false);
    setBorder3(true);
  }
  


  return (
   <Router>
     <div className="grid grid-cols-2">
        <nav className="h-auto w-60 border-r-2 border-gray-300">
          <ul className="w-60 fixed h-auto">
            
            <li className="mb-5 p-7" ><img className="w-20 h-20" src="/mochi.png" alt="#"/><b>Mochi</b></li>
            <li onClick={handleClickWelcome} id="nav-item-1" className={border1 ? 'border-on font-bold text-gray-400 p-5 pl-7' : 'border-off font-bold text-gray-400 p-5 pl-7'}>
              <Link to="/">Welcome</Link>
            </li>
            
            <li onClick={handleClickExchange} id="nav-item-3" className={border3 ? "border-on font-bold text-gray-400 p-5 pl-7" : "border-off font-bold text-gray-400 p-5 pl-7"}>
              <Link to="/Summon">Summon</Link>
            </li>
            <li onClick={handleClickExchange} id="nav-item-3" className={border3 ? "border-on font-bold text-gray-400 p-5 pl-7" : "border-off font-bold text-gray-400 p-5 pl-7"}>
              <Link to="/Help">Help</Link>
            </li>
            
          </ul>
        </nav>

        
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          
          <Route path="/Explore" element={<Explore/>}/>
        
          <Route path="/Summon" element={<Summon/>}/>

          <Route path="/Help" element={<Help/>}/>

          <Route path="/Community" element={<Community/>}/>
           
        </Routes>
      </div>

   </Router>
    
  );
}

export default App;