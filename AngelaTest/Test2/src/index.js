import React from "react"
import ReactDOM from "react-dom"


const date = new Date();
const currentTime = date.getHours();
let user = "Taliesin"

let greeting;

const cssStyle = {
  color: ''
}

if (currentTime < 12) {
    greeting = "Goodmorning";
    cssStyle.color = "Green"
} else if (currentTime < 18) {
    greeting = "Goodafternoon";
    cssStyle.color = "teal"
} else {
    greeting = "Goodnight";
    cssStyle.color= "Indigo"
}


ReactDOM.render(
    <div>
        <h1 className='heading' style={cssStyle}>{greeting} {user}</h1>
    </div>
    
    
    
    
    
    
    
    ,
    document.getElementById('root'));