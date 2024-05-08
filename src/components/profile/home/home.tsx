import { RouteProps } from "react-router";
import React from "react";
import Profile from "../profile";
import { useNavigate } from "react-router";


const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center ">
        <button onClick={()=>navigate('/game')} className="w-[160px] h-[80px] font-orbitron absolute top-[60%] gradient border-spacing-3  transition transform ease-in-out duration-700  border-2 border-[#FF6700] border-double shadow-2xl brightness-110 rounded-lg flex flex-col items-center justify-center outline z-50">
            <h1 className="absolute text-3xl text-white font-bold inner_text_shadow">START</h1>
            
        </button>
        </div>
        
       
    )
}
export default Home;