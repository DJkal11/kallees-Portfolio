import React from "react";
import {
    Link
  } from "react-router-dom";

function Raid() {
    return (
        <div className="transitionPage h-screen fixed text-center pl-20 pr-20 bg-green-500 text-white DAO-mobile">
            <div className="text-center mt-20">
            <img className="w-28 h-28 p-2 m-auto " src="/sword.png" alt="#" />
            <h1 className="text-4xl p-2"><b>Raid Guild</b></h1>
            </div>

            <div className="text-3xl p-4 text-center">
             <h1 className="">slaying your web3 product demons</h1>
            </div>

            <div className="grid grid-cols-3 p-4 text-center">
              <div className="">
                  <h1>ACTIVE MEMBERS</h1>
                  <h1 className="text-xl"><b>130</b></h1>
              </div>

              <div>
                  <h1>SHARES</h1>
                  <h1 className="text-xl"><b>75,411</b></h1>
              </div>

              <div>
                  <h1>LOOT</h1>
                  <h1 className="text-xl"><b>0</b></h1>
              </div>

            </div>

            <div className="p-4 text-center">
                <h3>VAULE TOTAL</h3>
                <h1 className="text-2xl"><b>$4,672,620.12</b></h1>
                <p>9 Tokens</p>
            </div>
            <div className="text-center">
            <button className="hover:bg-white hover:text-black border-2 border-white p-2 rounded-lg ml-5">View Bank</button>
            <Link to="/RaidProposal"><button className="hover:bg-red-500 bg-red-400 border-2 border-red-400 p-2 rounded-lg ml-2 text-white">View Proposals</button></Link>
            </div>
        </div>
    )
}

export default Raid;