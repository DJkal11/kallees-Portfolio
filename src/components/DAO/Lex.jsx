import React from "react";

function Raid() {
    return (
        <div className="h-screen transitionPage fixed">
            <div className="grid grid-cols-2 mt-40">
            <img className="w-28 h-28 p-2 m-auto " src="/cross.png" alt="#" />
            <h1 className="text-3xl p-2"><b>LexDAO</b></h1>
            </div>

            <div className="text-2xl p-4">
             <h1>Legal engineering guild building next generation contracts</h1>
            </div>

            <div className="grid grid-cols-3 p-4">
              <div className="">
                  <h1>ACTIVE MEMBERS</h1>
                  <h1 className="text-xl"><b>90</b></h1>
              </div>

              <div>
                  <h1>SHARES</h1>
                  <h1 className="text-xl"><b>900</b></h1>
              </div>

              <div>
                  <h1>LOOT</h1>
                  <h1 className="text-xl"><b>20</b></h1>
              </div>

            </div>

            <div className="p-4">
                <h3>VAULE TOTAL</h3>
                <h1 className="text-2xl"><b>$23,404.42</b></h1>
                <p>3 Tokens</p>
            </div>

            <button className="border-2 border-gray-400-400 p-2 ml-5">View Bank</button>
            <button className="bg-gray-400 border-2 border-gray-400 p-2 ml-2">View Proposals</button>
           
        </div>
    )
}

export default Raid;