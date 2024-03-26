import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";


export default function Layout(){
    return(
        <>
            <Header/>
            {/* "Outlet" typically refers to a placeholder component where other components can be rendered dynamically based on the current route or application state.
              We can rndr comp dynam in 'Outlet' */}
            <Outlet/>
            <Footer/>
        </>
    )
}
