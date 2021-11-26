import React from "react";
import {
    Link
  } from "react-router-dom";
function RaidProposal() {

    return (
        <div className="max-w-screen-2xl h-screen bg-red-400 margin text-white" style={{backgroundImage: "url(https://images.unsplash.com/photo-1629984164142-21c2039de926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)", backgroundSize: "cover"}}>
            <div className="flex flex-row">
            <h1 className="text-4xl p-10 pb-2">Proposals</h1>
            <Link to="/"><button className="bg-green-500 rounded-2xl mt-10 text-white p-2 w-40">Back</button></Link>
            </div>
            <div className="grid grid-cols-2 ">
             <div className="p-10 pb-2 pt-2 mt-5">
             <label className="" for="proposals">Filter By: </label>
                 <select className="p-1 rounded-lg" placeholder="Funding Proposals" name="Proposals" id="proposals">
                 <option value="Active">Active</option>
                 <option value="All">All</option>
                 <option value="Funding Proposals">Funding Proposals</option>
                 <option value="Member Proposals">Member Proposals</option>
                 </select>
             </div>

             <div className="p-10 pb-2 pt-2 mt-5">
             <label for="Votes">Sort By: </label>
                 <select className="p-1 rounded-lg" name="Votes" id="Votes">
                 <option value="Newest">Newest</option>
                 <option value="Oldest">Oldest</option>
                 <option value="Most Votes">Most Votes</option>
                 </select>
             </div>

             <div className="shadow-2xl w-96 m-10 mb-5 mr-0 rounded-3xl bg-pink-500">
         
         <div className="p-10 pt-2">
             <div className="">
               <h1 className="text-3xl">FUNDING PROPOSAL</h1>
               <h1 className="text-2xl">submitted Member Proposal</h1>
               <h2 className="text-2xl">1 WXDAI</h2>
               <h3>Submitted Nov 13,2021</h3>
               <h1 className="text-2xl">Unsponsored</h1>
             </div>
         </div>

        </div>
        
        <div className=" bg-pink-500 w-96 m-10 mb-5 mr-0 rounded-3xl">

         <div className="p-10 pt-2 shadow-2xl rounded-3xl">
             <div className="">
               <h1 className="text-3xl">FUNDING PROPOSAL</h1>
               <h1 className="text-2xl">Want to join the membership</h1>
               <h2 className="text-2xl">1 HAUS</h2>
               <h3>Submitted Nov 13,2021</h3>
               <h1 className="text-2xl">Unsponsored</h1>
               
             </div>
         </div>

        </div>

        <div className="shadow-2xl bg-pink-500 w-96 m-10 mb-5 mr-0 rounded-3xl">

      <div className="p-10 pt-2">
      <div className="">
      <h1 className="text-3xl">FUNDING PROPOSAL</h1>
      <h2 className="text-2xl">We need to triple our contribution</h2>
      <h3>Submitted Nov 13,2021</h3>
      <h1 className="text-2xl">Unsponsored</h1>
     </div>
     </div>

     </div>

     <div className="shadow-2xl w-96 m-10 mb-5 mr-0 rounded-3xl bg-pink-500">
         
         <div className="p-10 pt-2">
             <div className="">
               <h1 className="text-3xl">MEMBER PROPOSAL</h1>
               <h2 className="text-2xl">Request to Join The FoundationsDAO</h2>
               <h2 className="text-2xl">0.008 HAUS</h2>
               <h3>Submitted Nov 13,2021</h3>
               <h1 className="text-2xl">Unsponsored</h1>
             </div>
         </div>

        </div>

         </div>

    
        </div>
    )
}

export default RaidProposal;