import React, { useEffect, useState } from 'react';
import { RouteProps  } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';
import TokenExpired from '../profile/tokenExpired';
import { VITE_URLPRIVATEROUTE } from '../../config/config';

interface PrivateRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component }) => {
  //@ts-ignore
  const { isAuthenticated} = useSelector((state) => state.auth);
  const [auth,setAuth] = useState(false)
  useEffect(()=>{

      const getJwtToken = async () => {
        const token = localStorage.getItem('jwt_token');
        try {
          const response = await axios.get(VITE_URLPRIVATEROUTE as string, {
          headers: {
            Authorization: `${token}`,
            "Access-Control-Allow-Origin":"*"
          }
        });
        
        if(response.status === 200){
          setAuth(true);
        }
        } catch (error) {
          console.error(error);
        }
      }
      getJwtToken();
});

  return auth || isAuthenticated ? <Component/> : <TokenExpired/>;
};

export default PrivateRoute;