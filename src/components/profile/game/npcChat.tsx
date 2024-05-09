import { useSelector } from "react-redux";
import Planet from "./planet";
import { planets } from "../../../gateways/planets";
import { useEffect, useState } from "react";

const NpcChat = () => {
    //@ts-ignore
    const { cd, active } = useSelector((state) => state.cd);
    //@ts-ignore
    const { init, called } = useSelector((state) => state.init);
    //@ts-ignore
    const { call } = useSelector((state) => state.ls)
    //@ts-ignore
    const status = useSelector((state)=>state.status)
    const [text,setText] = useState(`Viajando a ${init}...`)
    useEffect(() => {
        
        if(called){
           const timer = setTimeout(() => {
            setText("Nos encontramos en -->");
        }, 3000); 

        return () => clearTimeout(timer); 
        }else{
            setText(`Viajando a ${init}...`)
        }
        
    }, [called]);
    return (
        <div className="fixed bottom-[1%] right-[40%] w-auto h-auto left-[35%] shadow-2xl z-50 flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center absolute">
                {status.called && <><h1 className="z-50  font-semibold text-green-600 inner_text_shadow mr-2">Ubicación actual {'-->'}{status.status}</h1>
                    <Planet name={cd} /></>}
                {active && <><h1 className="z-50  font-semibold text-green-600 inner_text_shadow mr-2">Viajar a {cd}?</h1>
                    <Planet name={cd} /></>}
                {called && <><h1 className="z-50  font-semibold text-green-600 inner_text_shadow mr-2">{text}</h1>
                    <Planet name={cd} /></>}
                {call && <div className="flex flex-col items-center justify-center w-full h-full">
                    {planets.map((text, index) => (
                        <div className="flex flex-row items-center justify-center" key={index + 1}>
                            <h1 className="z-50 font-semibold text-green-600 inner_text_shadow mr-2">{text}</h1>
                            <Planet name={text} />
                        </div>
                    ))}
                </div>}
            </div>
            <img src="./npc-chat.png" alt="" className="object-cover w-full h-full" />
        </div>

    )
}
export default NpcChat;