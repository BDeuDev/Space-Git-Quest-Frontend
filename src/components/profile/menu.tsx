import { optionsIcons } from "../../gateways/icons";
import Option from "./option";
import FunctionGenerator from "../../gateways/funtions";
import { useState } from "react";

const Menu = () => {
    const [hover, setHover] = useState(false);
    const positions = [
        "top-[22.5%]",
        "top-[45%]",
        "top-[67.5%]",
    ]
    const functions = FunctionGenerator();

    return (
        <div className={`w-[100px] absolute h-full z-50 bg-transparent cursor-pointer flex flex-col items-center transition transform ease-in-out duration-700 hover:-translate-x-[8%] ${hover ? '-translate-x-[70%]' : ' -translate-x-[8%]'}`} onMouseLeave={() => setHover(true)} onMouseEnter={() => setHover(false)}>
            <img src="./menubar-2.png" alt="" className=" h-4/5 my-auto object-cover " />
            {optionsIcons.map((icon, index) => (
                <Option key={index + 1} onclick={() => functions[index]()} icon={icon} position={positions[index]} />
            ))}
        </div>
    )
}
export default Menu;