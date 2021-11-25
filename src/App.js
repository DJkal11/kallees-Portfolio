
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaDiscord } from "react-icons/fa";
import Welcome from './components/welcome';
import Explore from './components/explore';
import Summon from './components/summon';
import Help from './components/help';
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

  function handleClickSummon() {
    setBorder1(false);
    setBorder2(true);
    setBorder3(false);
  }

  function handleClickHelp() {
    setBorder1(false);
    setBorder2(false);
    setBorder3(true);
  }
  


  return (
   <Router>
     <div className="grid grid-cols-2">
        <nav className="h-auto w-60 border-r-2 border-gray-300 nav">
          <ul className="w-60 fixed h-auto">
            
            <li className="mb-5 p-7" ><img className="w-20 h-20" src="/mochi.png" alt="#"/><b>Mochi</b></li>
            <li onClick={handleClickWelcome} id="nav-item-1" className={border1 ? 'border-on font-bold text-gray-400 p-5 pl-7' : 'border-off font-bold text-gray-400 p-5 pl-7'}>
              <Link to="/">Welcome</Link>
            </li>
            
            <li onClick={handleClickSummon} id="nav-item-2" className={border2 ? "border-on font-bold text-gray-400 p-5 pl-7" : "border-off font-bold text-gray-400 p-5 pl-7"}>
              <Link to="/Summon">Summon</Link>
            </li>
            <li onClick={handleClickHelp} id="nav-item-3" className={border3 ? "border-on font-bold text-gray-400 p-5 pl-7" : "border-off font-bold text-gray-400 p-5 pl-7"}>
              <Link to="/Help">Help</Link>
            </li>
            <div className="flex flex-row p-5 mt-40">
            <AiFillTwitterCircle className="w-10 h-10 text-gray-400"/>
            <FaDiscord className="w-10 h-10 text-gray-400"/>
            </div>
          </ul>
        </nav>

        
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          
          <Route path="/Explore" element={<Explore/>}/>
        
          <Route path="/Summon" element={<Summon/>}/>

          <Route path="/Help" element={<Help/>}/>
           
        </Routes>
      </div>

   </Router>
    
  );
}

export default App;