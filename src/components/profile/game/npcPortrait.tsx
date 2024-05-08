import React from "react";




const NpcPortrait = () => {

    return (
       <div className="fixed bottom-[1%] w-auto h-auto left-[5%] z-40 shadow-2xl">
            <img src="./npc-portrait.png" alt="" className="object-cover w-full h-full" style={{maskImage: 'linear-gradient(black 90%, transparent)'}}/>
       </div>
       
    )
}
export default NpcPortrait;