import { Navbar } from "react-bootstrap"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CustomNavbar from "../components/navbar"
import Home from "../screens/home"


const Navigations=()=>{
    return(
        <>
        <CustomNavbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        

        </Routes>

        </>
    )
}
export default Navigations