import React from 'react'
import Nav from './Nav';
import { useParams } from 'react-router-dom'

export default function User() {
    const params = useParams();
    return (
        <div>
        <Nav />

            <h1>Hii....!</h1>
            <h2>I am user {params.username}.</h2>
            <span>This is component is using dynamic routing. We can use dynamic routing by passing username dynamically as :  http://localhost:5173/routeruser/deepak</span>
        </div>
    )
}
