import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { init } from "../redux/initSlice";
const FunctionGenerator = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const profileLink = () => {
        dispatch(init({value:false,text:''}))
        return navigate('/profile')
    }
    const gameLink = () => {
        return navigate('/game')
    }
    const logout = () => {
        localStorage.clear();
        return navigate('/exit')
    }
    const functions = [
        profileLink,
        gameLink,
        logout

    ]
    return functions
}
export default FunctionGenerator;