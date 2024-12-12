//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;


setInterval(function() {
    num1++;
 
if (num1 > 9) {
    num1 = 0;
    num2++;
}

if (num2 > 9) {
    num2 = 0;
    num3++;
}

if (num3 > 9) {
    num3 = 0;
    num4++;
}

if (num4 > 9) {
    num4 = 0;
    num5++;
}

if (num5 > 9) {
    num5 = 0;
    num6++;
}

if (num6 > 9) {
    num6 = 0;
    num7++;
}


//render your react application
ReactDOM.createRoot(document.getElementById('app')).render (<Home num1={num1} num2={num2} num3={num3} num4={num4} num5={num5} num6={num6}/>);
}, 1000);

ReactDOM.createRoot(document.getElementById('app')).render (<Home/>);
