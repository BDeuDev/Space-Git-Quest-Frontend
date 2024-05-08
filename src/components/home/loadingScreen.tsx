import { Transition } from "@headlessui/react";
interface ILoadingScreen {
    rendered:boolean;
    content:string;
}


const LoadingScreen: React.FC<ILoadingScreen> = ({rendered,content}) => {
  return (
    <Transition
            show={rendered}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed top-0 left-0 font-orbitron w-screen h-screen  bg-black text-white flex flex-col justify-center items-center z-50">
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white "></div>
                    <h1 className="font-extralight m-5 text-2xl">{content}</h1>
                </div>
            </div>
        </Transition>
  )
}
export default LoadingScreen;