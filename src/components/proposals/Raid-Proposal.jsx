import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from 'react-icons/io5';

function RaidProposal() {
  return (
    <div
      className="transitionProposal max-w-screen-2xl h-full height-mobile margin-mobile bg-red-400 margin text-white"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1629984164142-21c2039de926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-row proposal-heading-mobile ">
      <Link to="/">
          <button className="hover:bg-green-600 colour rounded-full mt-10 text-white p-2 w-10 text-2xl ml-8">
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
      <div className="grid grid-cols-2 welcome pl-44 pr-36 proposal-padding-mobile proposal-padding-tablet">
        

        <div className="shadow-2xl w-80 h-auto m-10 mb-7 mr-0 rounded-3xl colour text-white">
          <div className="p-8">
            <div className="">
              <h1 className="text-4xl">FUNDING PROPOSAL</h1>
              <h1 className="text-3xl">submitted Member Proposal</h1>
              <h3 className="text-2xl">Submitted Nov 13,2021</h3>
              <h1 className="text-xl">Unsponsored</h1>
            </div>
          </div>
        </div>

        <div className="w-80 h-auto m-10 mb-7 mr-0 rounded-3xl colour text-white">
          <div className="p-8">
            <div className="">
              <h1 className="text-4xl">FUNDING PROPOSAL</h1>
              <h1 className="text-3xl">Want to join the membership</h1>
              <h3 className="text-2xl">Submitted Nov 13,2021</h3>
              <h1 className="text-xl">Unsponsored</h1>
            </div>
          </div>
        </div>

        <div className="w-80 h-auto m-10 mb-7 mr-0 rounded-3xl colour text-white">
          <div className="p-8">
            <div className="">
              <h1 className="text-4xl">FUNDING PROPOSAL</h1>
              <h2 className="text-3xl">We need to triple our contribution</h2>
              <h3 className="text-2xl">Submitted Nov 13,2021</h3>
              <h1 className="text-xl">Unsponsored</h1>
            </div>
          </div>
        </div>

        <div className="w-80 h-auto m-10 mb-7 mr-0 rounded-3xl colour text-white">
          <div className="p-8">
            <div className="">
              <h1 className="text-4xl">MEMBER PROPOSAL</h1>
              <h2 className="text-3xl">Request to Join FoundationsDAO</h2>
              <h3 className="text-2xl">Submitted Nov 13,2021</h3>
              <h1 className="text-xl">Unsponsored</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaidProposal;
