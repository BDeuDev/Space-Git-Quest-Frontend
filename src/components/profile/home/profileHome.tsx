import { RouteProps } from "react-router";
import React from "react";
import Profile from "../profile";
import Home from "./home";



const ProfileHome = () => {

    return (
       <Profile component={Home}/>
       
    )
}
export default ProfileHome;