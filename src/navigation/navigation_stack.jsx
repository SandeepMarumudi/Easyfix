import { Navbar } from "react-bootstrap"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CustomNavbar from "../components/navbar"
import Home from "../screens/home"
import UserAuth from "../screens/login"
import Elecrician from "../screens/electrician"
import Carpenter from "../screens/carpenter"
import Plumber from "../screens/plumber"
import Ac from "../screens/ac_appliances"
import Cartscreen from "../screens/cart"
import UserBookedServices from "../screens/booked"

const Navigations=()=>{
    return(
        <>
        <CustomNavbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<UserAuth/>}/>
            <Route path="/cart" element={<Cartscreen/>}/>
            <Route path="/electrician" element={<Elecrician/>}/>
            <Route path="/carpenter" element={<Carpenter/>}/>
            <Route path="/plumber" element={<Plumber/>}/>
            <Route path="/ac" element={<Ac/>}/>
            <Route path="/booked" element={<UserBookedServices/>}/>
          

        </Routes>

        </>
    )
}
export default Navigations