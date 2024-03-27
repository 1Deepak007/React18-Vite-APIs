import React from 'react'

export default function NestedComponent() {
    function NstdComp(){
        return(<>
            <p>This is 02NestedComponent.js's nested component(NstdComp). </p>
        </>)
    }
    return (
        <>
            <h3  className='text-center text-decoration-underline '>Nested Component</h3>
            <p>This NestedComp.js's main component. </p>
    
            <NstdComp/>
            <hr />
        </>
    )
    }