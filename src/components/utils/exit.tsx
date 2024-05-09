import { useEffect, useState } from "react";
import LoadingScreen from "../home/loadingScreen";
import { useNavigate } from "react-router";


const Exit = () => {
    const [aux,setAux] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        const interval = setInterval(() => {
          setAux(!aux)
        }, 2000); 
    
        return () => clearInterval(interval);
      },[] ); 
      if(aux){
        navigate('/')
      }
    return (
       <LoadingScreen content="Logging out..." rendered={true}/>
    )
}
export default Exit;