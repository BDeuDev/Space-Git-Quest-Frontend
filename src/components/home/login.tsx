import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Login = () =>{

    const clientId = "4fa679e5f5698781cffd"

    const handleSubmit = () => {
           window.location.assign('https://github.com/login/oauth/authorize?client_id=' + clientId)
        
      }

    return (
        <div className="w-[160px] mt-10 absolute  glassmorphism-xl-login hover:bg-black hover:bg-opacity-75 transition transform ease-in-out duration-700 text-white shadow-xl font-orbitron top-[70%] z-10 hover:scale-110">
            <button onClick={handleSubmit} className="flex flex-row justify-center items-center">
                <h1 className="w-full ml-1 p-4 z-10  rounded-xl  cursor-pointer text-xl">Login</h1>
                <FontAwesomeIcon icon={faGithub} className="text-4xl p-2 m-1 cursor-pointer " />
            </button>

        </div>
    )
}
export default Login;