import { Navbar } from "react-bootstrap"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CustomNavbar from "../components/navbar"
import Home from "../screens/home"
import UserAuth from "../screens/login"
import Elecrician from "../screens/electrician"
import Carpenter from "../screens/carpenter"
import Plumber from "../screens/plumber"
import Ac from "../screens/ac_appliances"


const Navigations=()=>{
    return(
        <>
        <CustomNavbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<UserAuth/>}/>
            <Route path="/electrician" element={<Elecrician/>}/>
            <Route path="/carpenter" element={<Carpenter/>}/>
            <Route path="/plumber" element={<Plumber/>}/>
            <Route path="/ac" element={<Ac/>}/>
            <Route path="/plumber" element={<Plumber/>}/>
        </Routes>

        </>
    )
}
export default Navigations