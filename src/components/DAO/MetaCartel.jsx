import React from "react";

function MetaCartel() {
    return (
        <div className="h-screen transitionPage fixed">
            <div className="grid grid-cols-2 mt-40">
            <img className="w-28 h-28 p-2 m-auto " src="/hot.png" alt="#" />
            <h1 className="text-3xl p-2"><b>MetaCartel xDai</b></h1>
            </div>

            <div className="text-2xl p-4">
             <h1>If you want to go fast, go alone. If you want to go far, go together.</h1>
            </div>

            <div className="grid grid-cols-3 p-4">
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

            <div className="p-4">
                <h3>VAULE TOTAL</h3>
                <h1 className="text-2xl"><b>$1,917,186.71</b></h1>
                <p>4 Tokens</p>
            </div>

            <button className="border-2 border-purple-400 p-2 ml-5">View Bank</button>
            <button className="bg-purple-400 border-2 border-purple-400 p-2 ml-2">View Proposals</button>
           
        </div>
    )
}

export default MetaCartel;