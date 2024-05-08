import { BrowserRouter as Router, Route, /* Link, */ Routes } from 'react-router-dom';
import Home from '../components/home/home';
import AuthCallback from '../components/home/authCallback';
import Exit from '../components/utils/exit';




export const PublicRoutes = () => {

  return (
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/auth' Component={AuthCallback}/>
        <Route path='/exit' Component={Exit}/>
    </Routes>

  )
}