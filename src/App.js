import React from "react";
import Button from "./Button";
import "./style.css";



const App = () => {
  return (
    <div className="App">
      <h1 style= {{textAlign: "center"}}>Hello </h1>
      
      
      <Button title = "App Store"/>
      <Button title = "Play Store"/>

    {/*   <button className="AppStore Btn">App Store</button>
      <button className="PlayStore Btn">Play Store</button> */}
    </div>
  );
}

export default App;
