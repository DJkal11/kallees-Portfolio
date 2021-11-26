import React from "react";

function MetaCartelProposal() {

    return (
        <div className="" style={{backgroundImage: "url('/mochi-black.jpg')"}}>
            <h1 className="text-4xl p-10 pb-2 -ml-96">Proposals</h1>
            <div className="grid grid-cols-2 -ml-96">
             <div className="p-10 pt-2 mt-5">
             <label className="" for="proposals">Filter By</label>
                 <select name="Proposals" id="proposals">
                 <option value="Active">Active</option>
                 <option value="All">All</option>
                 <option value="Funding Proposals">Funding Proposals</option>
                 <option value="Member Proposals">Member Proposals</option>
                 </select>
             </div>

             <div className="p-10 pt-2 mt-5">
             <label for="Votes">Sort By</label>
                 <select name="Votes" id="Votes">
                 <option value="Newest">Newest</option>
                 <option value="Oldest">Oldest</option>
                 <option value="Most Votes">Most Votes</option>
                 </select>
             </div>

             <div className="shadow-2xl w-96 m-10 rounded-3xl">
         
         <div className="p-10 pt-2">
             <div className="">
               <h1 className="text-3xl">FUNDING PROPOSAL</h1>
               <h2 className="text-2xl">0</h2>
               <h3>Submitted Nov 24,2021</h3>
               <h1 className="text-2xl">Unsponsored</h1>
             </div>
         </div>

        </div>
        
        <div className=" bg-yellow-400 w-96 m-10 rounded-3xl">

         <div className="p-10 pt-2 shadow-2xl rounded-3xl">
             <div className="">
               <h1 className="text-3xl">FUNDING PROPOSAL</h1>
               <h2 className="text-2xl">Test</h2>
               <h3>Submitted Nov 24,2021</h3>
               <h1 className="text-2xl">PAYMENT REQUESTED</h1>
               <h2>1 WXDAI</h2>
             </div>
         </div>

        </div>

        <div className=" bg-red-300 w-96 m-10 rounded-3xl">

      <div className="p-10 pt-2 shadow-2xl rounded-3xl">
      <div className="">
      <h1 className="text-3xl">FUNDING PROPOSAL</h1>
      <h2 className="text-2xl">Request to Join TheFEATURED DAOS 请求加入 FEATURED DAOS</h2>
      <h3>Submitted Nov 24,2021</h3>
      <h1 className="text-2xl">Unsponsored</h1>
     </div>
     </div>

     </div>

     <div className="shadow-2xl w-96 m-10 rounded-3xl">
         
         <div className="p-10 pt-2">
             <div className="">
               <h1 className="text-3xl">FUNDING PROPOSAL</h1>
               <h2 className="text-2xl">0</h2>
               <h3>Submitted Nov 24,2021</h3>
               <h1 className="text-2xl">Unsponsored</h1>
             </div>
         </div>

        </div>

         </div>

    
        </div>
    )
}

export default MetaCartelProposal;