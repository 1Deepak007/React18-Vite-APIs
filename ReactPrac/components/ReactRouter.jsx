import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Nav from "./ReactRouter/Nav";


export default function ReactRouter() {
    return (
        <div className="container">
            <h1 className="text-center text-decoration-underline">React Router</h1>
            <Nav />

            <span className="my-4">Note : User component is using dynamic routing. We can use dynamic routing by passing username dynamically as :  http://localhost:5173/routeruser/deepak</span>     <br/><hr />

            <h4>Link : </h4><p> Link component, React Router handles the navigation internally without causing a full page refresh. </p>
            <h4>Anchor "a" tag : </h4><p> Anchor tag in React applications typically cause a full page reload when clicked. If your application is not using React Router for client-side routing, or if you want to link to external pages or resources, you can use Anchor Tag.</p>
        </div>
    )
}
