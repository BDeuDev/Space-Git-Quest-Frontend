import { useNavigate } from "react-router";
const FunctionGenerator = () => {
    const navigate = useNavigate();
    const saludar = () => {
        return navigate('/profile')
    }
    const saludar2 = () => {
        return navigate('/game')
    }
    const logout = () => {
        localStorage.clear();
        return navigate('/exit')
    }
    const functions = [
        saludar,
        saludar2,
        logout

    ]
    return functions
}
export default FunctionGenerator;