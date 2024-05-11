import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface SectionLinkProps {
    onclick:()=>void;
    text:string;
    icon:IconProp;
    active:boolean;
}
const SectionLink:React.FC<SectionLinkProps> = ({onclick,text,icon,active}) => {

  return (

    <button onClick={onclick} className={`w-[129px]  flex flex-row items-center justify-center ${active ? 'bg-white text-black' : 'glassmorphism-xl-login text-white'} p-2 m-2 glassmorphism-xl-login hover:bg-white hover:text-black  transition transform ease-in-out duration-700`}>
            <FontAwesomeIcon icon={icon} className="m-1 "/>
            <h2>
                {text}
            </h2>
        </button>
  )
}

export default SectionLink;