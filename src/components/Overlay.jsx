import React from "react";
import { Router, Link } from "react-router-dom";

export default function Overlay() {

  return (
    <div className="fixed z-100 inset-0 w-full h-full bg-fuchsia-950/50 backdrop-blur-2xl overflow-hidden">
        <div className="flex justify-end p-4 w-full">
            <Link to={'/'}>
                <img src="/close.png" className="w-[36px] h-[36px] object-cover"/>
            </Link>
        </div>
        <div className="h-full flex flex-col items-center justify-center gap-[20px] text-3xl mt-[-50px]">
            <Link to={'/'} className="hover:underline hover:underline-offset-5 cursor-pointer" >Home</Link>
            <Link to={'/movies'} className="hover:underline hover:underline-offset-5 cursor-pointer">Movies</Link>
            <Link to={'/shows'}><p className="hover:underline hover:underline-offset-5 cursor-pointer">TV Shows</p></Link>
            <Link to={'/about'}><p className="hover:underline hover:underline-offset-5 cursor-pointer">About</p></Link>
        </div>       
    </div>
  )
}
