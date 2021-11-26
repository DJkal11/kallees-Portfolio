import React from "react";
import {
    Link
  } from "react-router-dom";
function MetaGamaProposal() {

    return (
        <div className="max-w-screen-2xl h-auto bg-red-400 margin text-white" style={{backgroundImage: "url(https://images.unsplash.com/photo-1629984164142-21c2039de926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)", backgroundSize: "cover"}}>
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

             <div className="p-10 pt-2 pb-2 mt-5">
             <label for="Votes">Sort By: </label>
                 <select className="p-1 rounded-lg" name="Votes" id="Votes">
                 <option value="Newest">Newest</option>
                 <option value="Oldest">Oldest</option>
                 <option value="Most Votes">Most Votes</option>
                 </select>
             </div>

             <div className="shadow-2xl w-9/12 m-10 mb-5 mr-0 rounded-3xl bg-pink-500">
         
         <div className="p-10 pt-2">
             <div className="">
               <h1 className="text-3xl">MEMBER PROPOSAL</h1>
               <h1 className="text-2xl">mantherthepanther#2373 / The Manther (Telegram)</h1>
               <h2 className="text-2xl">10 DAI</h2>
               <h3>Submitted Nov 14,2021</h3>
               <h1 className="text-2xl">Unsponsored</h1>
             </div>
         </div>

        </div>
        
        <div className=" bg-pink-500 w-9/12 m-10  mb-5 mr-0 h-auto rounded-3xl">

         <div className="p-10 pt-2 shadow-2xl rounded-3xl">
             <div className="">
               <h1 className="text-3xl">MEMBER PROPOSAL</h1>
               <h1 className="text-2xl">interested in this project</h1>
               <h2 className="text-xl">interested in more women joining the cryptospace.</h2>
               <h2 className="text-2xl">20 WMATIC</h2>
               <h3>Submitted Nov 24,2021</h3>
               <h1 className="text-2xl">PAYMENT REQUESTED</h1>
               <h2>1 WXDAI</h2>
             </div>
         </div>

        </div>

        <div className=" bg-pink-500 w-9/12 m-10 mb-5 mr-0 rounded-3xl">

      <div className="p-10 pt-2 shadow-2xl rounded-3xl">
      <div className="">
      <h1 className="text-3xl">MEMBER PROPOSAL</h1>
      <h2 className="text-2xl">Membership Proposal</h2>
      <h2 className="text-2xl">0.01 WMATIC</h2>
      <h3>Submitted Nov 24,2021</h3>
      <h1 className="text-2xl">Unsponsored</h1>
     </div>
     </div>

     </div>

         </div>

    
        </div>
    )
}

export default MetaGamaProposal;