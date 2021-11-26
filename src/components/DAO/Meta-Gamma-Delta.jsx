import React from "react";
import {
    Link
  } from "react-router-dom";

function MetaGama() {
    return (
        <div className="h-screen transitionPage fixed text-center">
            <div className=" mt-20">
            <img className="w-28 h-28 p-2 m-auto " src="/tama.png" alt="#" />
            <h1 className="text-3xl p-2"><b>Meta Gamma Delta</b></h1>
            </div>

            <div className="text-2xl p-4">
             <h1>An inclusive and empowering society supporting women-led projects</h1>
            </div>

            <div className="grid grid-cols-3 p-4">
              <div className="">
                  <h1>ACTIVE MEMBERS</h1>
                  <h1 className="text-xl"><b>88</b></h1>
              </div>

              <div>
                  <h1>SHARES</h1>
                  <h1 className="text-xl"><b>885</b></h1>
              </div>

              <div>
                  <h1>LOOT</h1>
                  <h1 className="text-xl"><b>0</b></h1>
              </div>

            </div>

            <div className="p-4">
                <h3>VAULE TOTAL</h3>
                <h1 className="text-2xl"><b>$431.41</b></h1>
                <p>2 Tokens</p>
            </div>

            <button className="border-2 border-yellow-400 p-2 ml-5">View Bank</button>
            <button className="bg-yellow-400 border-2 border-yellow-400 p-2 ml-2 text-white">View Proposals</button>
           
        </div>
    )
}

export default MetaGama;