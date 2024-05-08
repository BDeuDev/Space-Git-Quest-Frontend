import React, { useEffect, useState, } from "react";

interface FragmentProps {
    timeout:number;
    y:string;
    duration:string;
    img:string;
    init:string
}

const Frag:React.FC<FragmentProps> = ({timeout,y,init,duration,img}) => {
    const [move,setMove] = useState(false)
    const [start,setStart] = useState(true)
    console.log(start)

    const translate = `${move ? y : init} `
    useEffect(() => {
  
        if (!start) {
          const timeoutId = setTimeout(() => {
            setMove(!move);
          }, timeout);

          return () => clearTimeout(timeoutId);
        }else{
            setStart(false)
            setMove(!move)
        }
      });

    return (
            <div className={`absolute w-auto h-auto bg-transparent bottom-[15%] ${translate} ${duration}`}>
                <img src={img} alt="" className=" w-full h-full object-cover"/>
            </div>
       
    )
}
export default Frag;