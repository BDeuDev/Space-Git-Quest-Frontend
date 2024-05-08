import React from "react";
import { GithubFact } from "../../gateways/githubFacts";

interface Section2Props {
    text : GithubFact[]
}
const Section2:React.FC<Section2Props> = ({text}) => {
    
    
    return (
        <div className="w-full h-screen bg-gradient-to-r from-blue-900 to-black p-8 shadow-inner flex flex-col items-center justify-center text-left">
            <h2 className="text-3xl font-bold mb-8 text-white text-center mt-16">Insights into GitHub</h2>
                    <div className="flex justify-center ">
                        <div className=" p-4 rounded-md flex flex-wrap items-center justify-center w-auto max-w-[800px] mx-5 ">
                            {text.map((fact: GithubFact, index: number) => (
                                <div key={index+1} className="flex mb-4 w-[275px] h-[125px] cursor-pointer my-5 mx-8 facts">
                                    <div className="border border-gray-300 p-2 rounded-md  text-white transition transform ease-in-out duration-700 hover:bg-white hover:text-black ">
                                        <div className="Fact__group">
                                            <strong className="border border-gray-300 p-2 block rounded-md text-center">{fact.highlight}</strong>
                                            <span className="mt-1 block">{fact.description}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
    )
}
export default Section2;