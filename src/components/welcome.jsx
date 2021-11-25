import React from "react";

function Welcome() {
    return (
        <div className="-ml-96 display h-full transitionPage">
            <div className="grid grid-cols-2">
            <h1 className="mt-10">Hub</h1>
            </div>

            <h1>FEATURED DAOS</h1>
            <div className="grid grid-cols-1">
                <div className="flex flex-col w-80 h-28 bg-white text-center mt-3">
                    <img className="w-14 h-14 p-1 m-auto" src="/hot.png" alt="#" />
                    <h1 className="">MetaCartel</h1>
                    <p className="">The airport to web3</p>
                </div>

                <div className="flex flex-col w-80 h-28 bg-white text-center mt-3">
                    <img className="w-14 h-14 m-auto" src="/tama.png" alt="#" />
                    <h1>Meta Gamma Delta</h1>
                    <p>Supporting women-led projects in Web3</p>
                </div>

                <div className="flex flex-col w-80 h-28 bg-white text-center mt-3">
                    <img className="w-14 h-14 m-auto" src="/sword.png" alt="#" />
                    <h1>RaidGuild</h1>
                    <p>Collective of web3 product builders</p>
                </div>

                <div className="flex flex-col w-80 h-28 bg-white text-center mt-3">
                    <img className="w-14 h-14 m-auto" src="cross.png" alt="#" />
                    <h1>LexDAO</h1>
                    <p>The Decentralised legal engineering guild</p>
                </div>
            </div>

            
           
        </div>
    )
}

export default Welcome;