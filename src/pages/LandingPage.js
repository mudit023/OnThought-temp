import React from "react";
import classes from './LandingPage.module.css'
import { Link, NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div className="container min-w-full">
      <NavLink className={"flex justify-between items-center w-full py-3 px-5 mb-10 rounded-lg"}>
        <div className="text-xl font-medium text-cyan-100">OnThought</div>
        <div>
          <Link to="/home" className="text-2xl font-medium bg-yellow-300 py-1 px-3 rounded">Check Now</Link>
        </div>
      </NavLink>
      <main className="flex flex-col justify-start items-center pt-10 min-h-[80vh]">
        <div className="flex flex-col justify-start items-start gap-2">
          <h2 className="font-bold text-yellow-200 text-9xl tracking-tighter">Think.</h2>
          <h2 className="text-9xl font-bold text-yellow-300 tracking-tighter">Write.</h2>
          <h2 className="text-9xl font-bold text-yellow-400 tracking-tighter">Repeat.</h2>
        </div>
        <div>
          <p>OnThought: A palce for your thoughts</p>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
