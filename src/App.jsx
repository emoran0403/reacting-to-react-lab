import React from 'react';
import ReactDOM from 'react-dom';
import {Greeter, Loading} from './components/Greeter';
import { useState } from 'react';


const App = () => {

    const [username, setUsername] = useState("");

    const handleUsername = (e) => {
        return setUsername(e.target.value)
    }
        return ( 
        <div>
            <h1>Hello React!</h1> {/**this is always shown */}
            {loaded ? ( // this displays when loaded=true
                <>
                    <Greeter name="Eric" phrase="Hey there" />
                    <Greeter name="Andrew" phrase="What's up" />
                    <Greeter name="Ervin Howell" phrase="I can't believe its not" />
                    
                </>
                
            ) : ( // this displays when loaded=false
                <Loading />
            )}
        </div>);
    
};

export default App




// if (loaded) {
//     return (
//         <>
// <input type="text" onChange={handleUsername} value={username}/>
// <p>You are logging in as: {username}</p>
//         <Greeter0 />
//         </>
//     )
// } else {
//     return (
//     <>
//     <Greeter1 name="Eric" phrase="Hey there"/>
//     <Greeter1 name="Andrew" phrase="What's up"/>
//     <Greeter1 name="Ervin Howell" phrase="I can't believe its not"/>)
//     </>
// }


