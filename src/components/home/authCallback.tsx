import LoadingScreen from "./loadingScreen";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { login } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { VITE_URLCALLBACK } from "../../config/config";



const AuthCallback = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const codeParam = urlParams.get("code");
        if(codeParam){
            const getAccessToken = async () => {
                try {
                    const response = await axios.get(VITE_URLCALLBACK as string + codeParam,);
                    if(response.status === 200){
                        const {access_token} = response.data;
                        const {jwt_token} = response.data;
                        const username = response.data.user_data.login;
                        const avatar = response.data.user_data.avatar_url;
                        if(access_token){
                            localStorage.clear();
                            localStorage.setItem('jwt_token','Bearer '+jwt_token);
                            dispatch(login({username:username,avatar:avatar}));
                            navigate('/profile');
                        }else{
                            console.error('No se proporciono un token');
                        }
                    }
                } catch (error) {
                    console.error(error);
                }
            }
            getAccessToken();
        }
      },[])
    return (
         <LoadingScreen content="Cargando..." rendered={true}/>
    )   
}
export default AuthCallback;