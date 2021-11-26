import React, { useState } from "react";

import MetaCartel from "./DAO/MetaCartel";
import Raid from "./DAO/Raid";
import Lex from "./DAO/Lex";
import MetaGama from "./DAO/Meta-Gamma-Delta";

function Welcome() {
 const [ page, setPage ] = useState("MetaCartel");   

function SelectPage(event) {
 const name = event.target.id
 setPage(name);
}

    return (
       
        <div className="margin h-full transitionPage ">
            
            <div className="grid grid-cols-2 h-auto ">
            
            <div className="grid grid-cols-1 DAO-item">
                
                <div className="flex flex-col w-96 h-auto bg-white text-center mt-3 shadow-2xl m-auto rounded-lg">
                    
                    <img  className="w-28 h-28 p-2 m-auto" src="/hot.png" alt="#" />
                    <h1 className="p-2">MetaCartel</h1>
                    <p className="pb-2">The airport to web3</p>
                    <button onClick={SelectPage} id="MetaCartel" className="w-full p-2 bg-blue-400 rounded-lg">View</button>
                </div>
                

                <div className="flex flex-col w-96 h-auto bg-white text-center mt-3 shadow-2xl m-auto rounded-lg">
                    <img className="w-28 h-28 p-2 m-auto" src="/tama.png" alt="#" />
                    <h1 className="p-2">Meta Gamma Delta</h1>
                    <p className="pb-2">Supporting women-led projects in Web3</p>
                    <button onClick={SelectPage} id="MetaGama" className="w-full p-2 bg-blue-400 rounded-lg">View</button>
                </div>

                <div className="flex flex-col w-96 h-auto bg-white text-center mt-3 shadow-2xl m-auto rounded-lg">
                    <img className="w-28 h-28 p-2 m-auto" src="/sword.png" alt="#" />
                    <h1 className="p-2">RaidGuild</h1>
                    <p className="pb-2">Collective of web3 product builders</p>
                    <button onClick={SelectPage} id="Raid" className="w-full p-2 bg-blue-400 rounded-lg">View</button>
                </div>

                <div  className="flex flex-col w-96 h-auto bg-white text-center mt-3 shadow-2xl m-auto rounded-lg">
                    <img className="w-28 h-28 p-2 m-auto" src="cross.png" alt="#" />
                    <h1 className="p-2">LexDAO</h1>
                    <p className="pb-2">The Decentralised legal engineering guild</p>
                    <button onClick={SelectPage} id="Lex" className="w-full p-2 bg-blue-400 rounded-lg">View</button>
                </div>
            </div>
             
             <div className="border-l-2 border-gray-500">
              {page === "MetaCartel" &&
                <MetaCartel/> 
              }
               {page === "MetaGama" &&
                <MetaGama className="transitionPage"/>
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