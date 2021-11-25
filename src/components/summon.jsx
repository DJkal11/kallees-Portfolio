import React from "react";

function Summon() {
    return (
        <div className="-ml-96 display h-screen transitionPage">
            <div className="mt-40">
                <h1 className="text-4xl">Connect your wallet to summon a DAO.</h1>
                <button className="bg-red-400 text-white mt-5 p-2 w-40">Connect Wallet</button>
               
            </div>
            <img className="w-96 h-96" src="/wallet.svg" alt="#"></img>
           
        </div>
    )
}

export default Summon;