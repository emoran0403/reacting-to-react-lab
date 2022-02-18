import React from "react";
import ReactDOM from "react-dom";
import { Greeter, Loading } from "./components/Greeter";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const handleUsername = (e) => {
    return setUsername(e.target.value);
  };

  const [loaded, setLoaded] = useState(false);

  const handleLoaded = () => {
    return setLoaded(!loaded);
  };

  if (!loaded) {
    setTimeout(() => {
      handleLoaded();
    }, 3000);
  }

  return (
    <div>
      <h1>Hello React!</h1> {/**this is always shown */}
      {loaded ? ( // this displays when loaded=true
        <>
          <Greeter name="Eric" phrase="Hey there" />
          <Greeter name="Andrew" phrase="What's up" />
          <Greeter name="Ervin Howell" phrase="I can't believe its not" />
          <input type="text" onChange={handleUsername} value={username} />
          <p>Hello {username}</p>
        </>
      ) : (
        // this displays when loaded=false
        <>
          <h1>Website Loading...</h1>
          <button type="button" onClick={handleLoaded}>
            I'm Impatient!
          </button>
        </>
      )}
    </div>
  );
};

export default App;

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
