import React from "react";

function Raid() {
    return (
        <div className="h-screen transitionPage fixed text-center ml-20">
            <div className="text-center mt-20">
            <img className="w-28 h-28 p-2 m-auto " src="/sword.png" alt="#" />
            <h1 className="text-3xl p-2"><b>Raid Guild</b></h1>
            </div>

            <div className="text-2xl p-4 text-center">
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
            <button className="border-2 border-red-400 p-2 ml-5">View Bank</button>
            <button className="bg-red-400 border-2 border-red-400 p-2 ml-2 text-white">View Proposals</button>
            </div>
        </div>
    )
}

export default Raid;