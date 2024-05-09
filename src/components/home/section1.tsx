import React from "react";
import { HighlightedPoint} from "../../gateways/highLightedPoints";

interface Section1Props {
    text: HighlightedPoint[]
}
const Section1:React.FC<Section1Props> = ({text}) => {

    return (
        <div className="w-full h-screen  bg-gradient-to-r from-blue-900 to-blue-700 p-8  shadow-lg flex flex-col justify-center items-center text-left">
           <h2 className="text-3xl font-bold mb-8 text-white">Why learn Git commands?</h2>
            <div className="w-5/6">
            <ul className="list-disc list-inside mx-auto">
            {text.map((point: HighlightedPoint, index: number) => (
                <li key={index+1} className="m-4 flex items-center">
                    <span  aria-label="check-mark" className="text-2xl mr-2">✅</span>
                    <div>
                        <p className="text-white">{point.description}</p>
                    </div>
                </li>
            ))}
        </ul>
            </div>
        
        
    </div>
    )
}
export default Section1;