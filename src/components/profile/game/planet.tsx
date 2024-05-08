import React from "react";
interface IPlanet {
    name:string;
}

const Planet:React.FC<IPlanet> = ({name}) => {

    return (
        //agregar aca cd
       <div className="h-[50px] w-[50px] z-10 ">
        <img src={`./${name}.gif`} alt="" className="object-cover w-full h-full"/>
       </div>
       
    )
}
export default Planet;