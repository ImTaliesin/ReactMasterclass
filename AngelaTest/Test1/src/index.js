import React from "react"
import ReactDOM from "react-dom"

const img = "https://picsum.photos/200"
const img2 = "https://picsum.photos/200/200"
const img3 = "https://picsum.photos/200/201"
let customStyle = {
  color: "teal",
  fontSize: "20px",
  border: "1px solid black"
}
const currentYear = new Date().getFullYear();
ReactDOM.render(
    <div>
      <h1 style={customStyle} contentEditable='true' spellCheck='false'>My Favorite Places</h1>
      <img src={img} alt="random image" className="img"></img>
      <img src={img2} alt="random image" className="img"></img>
      <img src={img3} alt="random image" className="img"></img>
    </div>
    ,
    document.getElementById('root'));
