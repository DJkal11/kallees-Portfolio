import React from "react";

function Help() {
  return (
    <div className="-ml-96 margin-mobile display h-screen summon-screen-height transitionPage grid grid-cols-2 welcome">
      <div className="mt-40 bg-white shadow-2xl rounded-2xl p-5 w-80 h-52 summon-title">
        <h1 className="text-5xl">Do you need help or have a question?</h1>
        <button className="hover:bg-red-500 bg-red-400 rounded-2xl text-white mt-4 p-3 w-40 ">
          Contact Us
        </button>
      </div>

      <img className="w-full h-full " src="/help.svg" alt="#"></img>
    </div>
  );
} 

export default Help;
