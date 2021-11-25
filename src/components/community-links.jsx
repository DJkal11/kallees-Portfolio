import React from "react";

function Community() {
    return (
        <div className="-ml-96 display h-screen transitionPage">
            <div className="grid grid-cols-2">
            <h1 className="mt-10">Hub</h1>
            <button className="mt-10 w-36 p-2 border-purple-500 border-2 rounded-3xl font-bold">Connect wallet</button>
            </div>

            <div className="">
              <h3 className="font-bold text-gray-400 text-4xl">Welcome to MochiDAO</h3>
              <h1 className="text-3xl text-purple-500 font-bold pt-2">Your new Hub for all Moloch DAO activity</h1>
              <h3 className="">Interact with DAOs or Summon a new one</h3>
              <h3 className="">Get activity feeds from all your DAOs</h3>
              <h3 className="">Easily switch between your DAOs</h3>
             
              
              <button className="mt-10 p-3 w-40 bg-black text-white rounded-lg">Connect wallet</button>
            </div>

            <div className=" mt-10 w-96 h-96 overflow-hidden">
                <img src="/credit-card.svg" alt="#" />
            </div>
           
        </div>
    )
}

export default Community;