import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../components/utils/privateRoute';
import ProfileHome from '../components/profile/home/profileHome';
import ProfileGame from '../components/profile/game/profileGame';


export const PrivateRoutes = () => {

  return (
    <Routes>
        <Route path='/profile' element={<PrivateRoute component={ProfileHome}/>}/>
        <Route path='/game' element={<PrivateRoute component={ProfileGame}/>}/>
    </Routes>

  )
}

 