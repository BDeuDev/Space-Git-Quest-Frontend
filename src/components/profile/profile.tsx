import { RouteProps } from "react-router";
import React, { useEffect, useState } from "react";
import Menu from "./menu";
import User from "./user";
import { useSelector } from "react-redux";
interface IProfile extends Omit<RouteProps, 'component'> {
    component: React.ComponentType<any>;
  }

const Profile:React.FC<IProfile> = ({component: Component}) => {
  //@ts-ignore
  const {init,called} = useSelector((state) => state.init);
  const [image,setImage] = useState('bg-default.png')

  useEffect(() => {
    if(called){
      setImage("light.gif")
    const timeoutId = setTimeout(() => {
      if(init){
        setImage(init+".png")
      }
        
      
        
    }, 3000); 


    return () => clearTimeout(timeoutId);
    }
    
},[init]);
    return (
       <div className=" w-full h-screen">
            <Menu/>
            <User/>
            <Component/>
            <img src="./bg-start.png" alt="Descripción de la imagen" className="absolute w-full h-full object-cover z-20" />

              <img src={`./${image}`} alt="Descripción de la imagen" className="fixed top-0 w-full h-full object-cover z-0" />

       </div>
       
    )
}
export default Profile;