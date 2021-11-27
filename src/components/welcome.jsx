import React, { useState } from "react";

import MetaCartel from "./DAO/MetaCartel";
import Raid from "./DAO/Raid";
import Lex from "./DAO/Lex";
import MetaGama from "./DAO/Meta-Gamma-Delta";
import { Link, animateScroll as scroll } from "react-scroll";

function Welcome() {
 const [ page, setPage ] = useState("MetaCartel");   

function SelectPage(event) {
 const name = event.target.id
 setPage(name);
}

    return (
       
        <div className="margin margin-mobile h-full">
            
            <div className="grid grid-cols-2 h-auto welcome">
            
            <div className="transitionPage grid grid-cols-1 DAO-item welcome-DAO-mobile">
                
                <div className="flex flex-col w-96 h-auto bg-white text-center mt-3 shadow-2xl m-auto rounded-lg">
                    
                    <img  className="w-28 h-28 p-2 m-auto" src="/hot.png" alt="#" />
                    <h1 className="p-2">MetaCartel</h1>
                    <p className="pb-2">The airport to web3</p>
                    <Link  to="DAO-company" spy={true} smooth={true} offset={-70} duration={500}>
                    <button onClick={SelectPage} id="MetaCartel" className="hover:bg-blue-600 text-white w-full p-2 bg-blue-400 rounded-lg">View</button>
                    </Link>
                </div>
                

                <div className="flex flex-col w-96 h-auto bg-white text-center mt-3 shadow-2xl m-auto rounded-lg">
                    <img className="w-28 h-28 p-2 m-auto" src="/tama.png" alt="#" />
                    <h1 className="p-2">Meta Gamma Delta</h1>
                    <p className="pb-2">Supporting women-led projects in Web3</p>
                    <Link  to="DAO-company" spy={true} smooth={true} offset={-70} duration={500}>
                    <button onClick={SelectPage} id="MetaGama" className="hover:bg-blue-600 text-white w-full p-2 bg-blue-400 rounded-lg">View</button>
                    </Link>
                </div>

                <div className="flex flex-col w-96 h-auto bg-white text-center mt-3 shadow-2xl m-auto rounded-lg">
                    <img className="w-28 h-28 p-2 m-auto" src="/sword.png" alt="#" />
                    <h1 className="p-2">RaidGuild</h1>
                    <p className="pb-2">Collective of web3 product builders</p>
                    <Link  to="DAO-company" spy={true} smooth={true} offset={-70} duration={500}>
                    <button onClick={SelectPage} id="Raid" className="hover:bg-blue-600 text-white w-full p-2 bg-blue-400 rounded-lg">View</button>
                    </Link>
                </div>

                <div  className="flex flex-col w-96 h-auto bg-white text-center mt-3 shadow-2xl m-auto rounded-lg">
                    <img className="w-28 h-28 p-2 m-auto" src="cross.png" alt="#" />
                    <h1 className="p-2">LexDAO</h1>
                    <p className="pb-2">The Decentralised legal engineering guild</p>
                    <Link  to="DAO-company" spy={true} smooth={true} offset={-70} duration={500}>
                    <button onClick={SelectPage} id="Lex" className="hover:bg-blue-600 text-white w-full p-2 bg-blue-400 rounded-lg">View</button>
                    </Link>
                </div>
            </div>
             
            
             <div title="DAO-company" id="DAO-company" className="border-l-2 border-gray-500 bg-green-500 smooth-scroll">
                 
              {page === "MetaCartel" &&
                <MetaCartel/> 
              }
               {page === "MetaGama" &&
                <MetaGama />
              }
               {page === "Raid" &&
                <Raid/>
              }
               {page === "Lex" &&
                <Lex/>
              }
             
             </div>
             
            </div>

           
           
        </div>
        
    )
}

export default Welcome;