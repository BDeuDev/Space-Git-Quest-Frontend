import React, { useEffect, useState, } from "react";

interface FragmentProps {
    timeout:number;
    y:number;
    duration:number;
    img:string
}

const Particles:React.FC<FragmentProps> = ({timeout,y,duration,img}) => {
    const [move,setMove] = useState(false)
    const [start,setStart] = useState(true)
    const translate = `translate-y-${y}`
    useEffect(() => {
  
        if (!start) {
          const timeoutId = setTimeout(() => {
            setMove((prevMove) => !prevMove);
          }, timeout);

          return () => clearTimeout(timeoutId);
        }else{
            setStart(false)
            setMove(!move)
        }
      });

    return (
            <div className={`absolute w-auto h-auto bg-transparent ${move ? translate : 'translate-y-0'}  transition transform ease-in-out  duration-[${duration}s]`}>
                <img src={img} alt="" className=" w-full h-full object-cover"/>
            </div>
       
    )
}
export default Particles;