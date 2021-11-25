import React from "react";

function Summon() {
    return (
        <div className="-ml-96 display h-screen transitionPage grid grid-cols-2">
            <div className="mt-40 bg-white shadow-2xl rounded-2xl p-5 w-96 h-64">
                <h1 className="text-5xl">Connect your wallet to summon a DAO.</h1>
                <button className="bg-red-400 rounded-2xl text-white mt-5 p-3 w-40 ">Connect Wallet</button>
               
            </div>
            <div>
            <img className="w-full h-full" src="/wallet.svg" alt="#"></img>
            </div>
        </div>
    )
}

export default Summon;