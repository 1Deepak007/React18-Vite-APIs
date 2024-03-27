import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import Github from "./Github/Github";


export default function Layout(){
    return(
        <>
            <Header/>
            {/* <Github/> */}
            {/* "Outlet" typically refers to a placeholder component where other components can be rendered dynamically based on the current route or application state.
              We can rndr comp dynam in 'Outlet' */}
            <Outlet/>
            <Footer/>
        </>
    )
}
