import React from "react"
import ReactDOM from "react-dom"

const name = "Talie"
const luckyNum = 9
ReactDOM.render(
    <div>
        <h1>Hello {name}, your lucky number is {luckyNum}</h1>
    </div>
    ,
    document.getElementById('root'));
