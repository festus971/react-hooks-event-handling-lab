// Code Keypad Component Here
import React from "react";
function Keypad(){
    function handle(){
        console.log("Entering password...")
    }
    return(
        <input type="password" onChange={handle}/>
    )
}
 export default Keypad;