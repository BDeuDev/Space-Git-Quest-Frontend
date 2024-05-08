import { useNavigate } from "react-router";



const TokenExpired = () => {
    const navigate = useNavigate();
    return (
       <div className="h-screen w-full bg-black flex flex-col items-center justify-center font-orbitron">
            <div className="w-[400px] h-auto bg-white rounded-lg flex flex-col items-center justify-center">
                <h1 className="text-3xl p-3 mt-[15%]">Session Expired</h1>
                <p className="p-3 mb-[15%] text-lg">Please{" => "}<button onClick={()=>navigate('/')} className="underline text-blue-500 hover:text-blue-700 text-lg transition transform ease-in-out duration-700 hover:scale-105 ">login again</button></p>
            </div>
       </div>
       
    )
}
export default TokenExpired;