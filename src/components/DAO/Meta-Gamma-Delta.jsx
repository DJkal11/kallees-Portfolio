import React from "react";
import { Link } from "react-router-dom";

function MetaGama() {
  return (
    <div className="transitionPage h-screen fixed text-center insight text-white DAO-mobile">
      <div className=" mt-20">
        <img className="w-28 h-28 p-2 m-auto " src="/tama.png" alt="#" />
        <h1 className="text-4xl p-2">
          <b>Meta Gamma Delta</b>
        </h1>
      </div>

      <div className="text-3xl p-4">
        <h1>
          An inclusive and empowering society supporting women-led projects
        </h1>
      </div>

      <div className="grid grid-cols-3 p-4">
        <div className="">
          <h1>ACTIVE MEMBERS</h1>
          <h1 className="text-xl">
            <b>88</b>
          </h1>
        </div>

        <div>
          <h1>SHARES</h1>
          <h1 className="text-xl">
            <b>885</b>
          </h1>
        </div>

        <div>
          <h1>LOOT</h1>
          <h1 className="text-xl">
            <b>0</b>
          </h1>
        </div>
      </div>

      <div className="p-4">
        <h3>VAULE TOTAL</h3>
        <h1 className="text-2xl">
          <b>$431.41</b>
        </h1>
        <p>2 Tokens</p>
      </div>

      <button className="hover:bg-white hover:text-black border-2 border-white p-2 rounded-lg ml-5">
        View Bank
      </button>
      <Link to="/MetaGamaProposal">
        <button className="hover:bg-yellow-500 bg-yellow-400 border-2 border-yellow-400 rounded-lg p-2 ml-2 text-white">
          View Proposals
        </button>
      </Link>
    </div>
  );
}

export default MetaGama;
