import Login from "./login";
import Frag from "./fragment";
import { img, duration, timeout, y } from "../../gateways/fragmentProps";
import Risk from "./risk";
import Particles from "./particles";

const Section0 = () => {

    return (
        <>
            <Login />
            {img.map((img, index) => (
                <Frag key={index + 1} init="translate-init" duration={duration[index]} img={img} y={y[index]} timeout={timeout[index]} />
            ))}
            <Risk/>
            <Particles img="./particles.png" duration={5} y={11} timeout={5000}/>
            <div className=" w-full h-screen">
                <img src="./bg-clean.png" alt="Descripción de la imagen" className=" w-full h-full object-cover" />
            </div>
        </>
    )
}
export default Section0;