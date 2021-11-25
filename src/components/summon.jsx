import React from "react";

function Summon() {
    return (
        <div className="-ml-96 display h-screen transitionPage">
            <div className="grid grid-cols-2">
            <h1 className="mt-10">Welcome Back</h1>
            <button className="mt-10 w-36 p-2 border-purple-500 border-2 rounded-3xl font-bold">Let's Talk</button>
            </div>

            <div className="">
              <h3 className="font-bold text-gray-400">Your CryptoBank for</h3>
              <h1 className="text-5xl text-purple-500 font-bold pt-2">Buy + 70</h1>
              <br/>
              <hr className="text-purple-500 break w-52 "/>
              <button className="mt-10 p-3 w-40 bg-black text-white rounded-lg">▶︎ Watch video</button>
            </div>

            <div className=" mt-10 w-96 h-96 overflow-hidden">
                <img src="/credit-card.svg" alt="#" />
            </div>
           
        </div>
    )
}

export default Summon;