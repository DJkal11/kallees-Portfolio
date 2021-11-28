import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from 'react-icons/io5';
function LexProposal() {
  return (
    <div
      className="transitionProposal max-w-screen-2xl h-auto height-mobile margin-mobile bg-red-400 margin text-white"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1629984164142-21c2039de926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-row">
      <Link to="/">
          <button className="hover:bg-green-600 colour rounded-full mt-10 text-2xl text-white p-2 w-10 ml-2">
            <IoArrowBack/>
          </button>
        </Link>
        <h1 className="text-4xl p-10 pb-2">Proposals</h1>
        
        <div className="p-10 pb-2 pt-2 mt-10">
          <label className="" for="proposals">
            Filter By:{" "}
          </label>
          <select
            className="p-1 rounded-lg text-black"
            placeholder="Funding Proposals"
            name="Proposals"
            id="proposals"
          >
            <option value="Active">Active</option>
            <option value="All">All</option>
            <option value="Funding Proposals">Funding Proposals</option>
            <option value="Member Proposals">Member Proposals</option>
          </select>
        </div>

        <div className="p-10 pb-2 pt-2 mt-10">
          <label for="Votes">Sort By: </label>
          <select className="p-1 rounded-lg text-black" name="Votes" id="Votes">
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="Most Votes">Most Votes</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 welcome pl-44 pr-36">
        

        <div className=" w-80 m-10 mb-7 mr-0 rounded-3xl colour text-white">
          <div className="p-10 pt-2">
            <div className="">
              <h1 className="text-3xl">MEMBER PROPOSAL</h1>
              <h1 className="text-lg">Request to Join The FoundationsDAO</h1>
              <h2 className="text-lg">1 HAUS</h2>
              <h3>Submitted Nov 18,2021</h3>
              <h1 className="text-2xl">Unsponsored</h1>
            </div>
          </div>
        </div>

        <div className="w-80 m-10 mb-7 mr-0 rounded-3xl colour text-white">
          <div className="p-10 pt-2 shadow-2xl rounded-3xl">
            <div className="">
              <h1 className="text-3xl">WHITELIST TOKEN PROPOSAL</h1>
              <h1 className="text-lg">psp</h1>
              <h2 className="text-lg">Token</h2>
              <h2 className="text-lg">0x5530...dae7</h2>
              <h3>Submitted Nov 18,2021</h3>
              <h1 className="text-2xl">Unsponsored</h1>
            </div>
          </div>
        </div>

        <div className="w-80 m-10 mb-7 mr-0 rounded-3xl colour text-white">
          <div className="p-10 pt-2">
            <div className="">
              <h1 className="text-3xl">MEMBER PROPOSAL</h1>
              <h2 className="text-lg">New Member: Justin Ho</h2>
              <h2 className="text-lg">
                Link: <a href="#">twitter.com/imjustinho</a>
              </h2>
              <h3>Submitted Nov 19,2021</h3>
              <h1 className="text-2xl">Unsponsored</h1>
            </div>
          </div>
        </div>

        <div className="w-80 m-10 mb-7 mr-0 rounded-3xl colour text-white">
          <div className="p-10 pt-2">
            <div className="">
              <h1 className="text-3xl">MEMBER PROPOSAL</h1>
              <h2 className="text-lg">Request Shares For Tokens</h2>
              <h2 className="text-lg">1 HAUS</h2>
              <h3>Submitted Nov 20,2021</h3>
              <h1 className="text-2xl">Unsponsored</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LexProposal;
