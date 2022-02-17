/**
 * Make a new component file named Greeter.jsx inside of your src/components/ directory. 
 * Have this also be a simple function component that returns a header. It should receive two props: phrase and name. 
 * And it needs to take these two props and display them in the returned header of this component. 
 * Something like: {props.phrase}, {props.name}! so you wind up with an output in the header: Hello there, Luke! for example.
 */

import React from "react";
import { useState } from 'react';

export const Greeter = (props) => {

    return(
        <>
            <h1>{props.phrase}, {props.name}</h1>
        
        </>
    )
}

export const Loading = () => {

const [loaded, setLoaded] = useState(false)

    const handleLoaded = () => {
        return setLoaded(true)
    }

    return(
        <>
            <h1>Website Loading...</h1>
            <button onClick={handleLoaded()}>I'm Impatient!</button>
        </>
    )
}

