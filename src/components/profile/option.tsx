import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface OptionProps {
    onclick:()=>void;
    icon:IconProp;
    position:string
}

const Option:React.FC<OptionProps> = ({onclick,icon,position}) => {
    const circleStyle = {
        width: 50,
        height: 50,
        borderRadius: '50%',
        border: '2.5px solid #7fa6a0'
      };

    return (

           <button onClick={onclick} className={`cursor-pointer absolute ${position} shadow-2xl bg-[#1d233d] my-3  text-[#5895e0] transition transform ease-in-out duration-700  flex flex-col items-center justify-center hover:brightness-150` } style={circleStyle}>
            <FontAwesomeIcon icon={icon} className="text-xl "/>
            </button>

       
    )
}
export default Option;