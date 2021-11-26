import React from "react";
import {
    Link
  } from "react-router-dom";

function MetaCartel() {
    return (
        <div className="h-screen transitionPage fixed bg-green-500 text-white">
            <div className="text-center mt-20">
            <img className="w-28 h-28 p-2 m-auto " src="/hot.png" alt="#" />
            <h1 className="text-4xl p-2"><b>MetaCartel xDai</b></h1>
            </div>

            <div className="text-3xl p-4 text-center">
             <h1>If you want to go fast, go alone. If you want to go far, go together.</h1>
            </div>

            <div className="grid grid-cols-3 p-4 text-center">
              <div className="">
                  <h1>ACTIVE CARTELIANS</h1>
                  <h1 className="text-xl"><b>120</b></h1>
              </div>

              <div>
                  <h1>SHARES</h1>
                  <h1 className="text-xl"><b>1,353</b></h1>
              </div>

              <div>
                  <h1>LOOT</h1>
                  <h1 className="text-xl"><b>0</b></h1>
              </div>

            </div>

            <div className="p-4 text-center">
                <h3>VAULE TOTAL</h3>
                <h1 className="text-2xl"><b>$1,917,186.71</b></h1>
                <p>4 Tokens</p>
            </div>
            <div className="text-center">
            <button className="border-2 border-purple-400 p-2 ml-5">View Bank</button>
            <button className="bg-purple-400 border-2 border-purple-400 p-2 ml-2 text-white"><Link to="/MetaCartelProposal">View Proposals</Link></button>
            </div>
        </div>
    )
}

export default MetaCartel;