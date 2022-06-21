//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let counter = 0;
let counterOne = 0;
let counterTwo = 0;
let counterThree = 0; 
let counterFour = 0;
let counterFive = 0;
//render your react application

ReactDOM.render(<Home secs={counterOne} secs1={counterTwo} secs2={counterThree} secs3={counterFour} secs4={counterFive}/>, document.querySelector("#app"));

let isCounting = false;

const recarga = function() {
        ReactDOM.render(<Home secs={counterOne} secs1={counterTwo} secs2={counterThree} secs3={counterFour} secs4={counterFive}/>, document.querySelector("#app"));
        if (isCounting == true){
            counter++;
        }
        counterOne = Math.floor((counter/1)%10);
        counterTwo = Math.floor((counter/10)%10 );
        counterThree = Math.floor((counter/100)%100);
        counterFour = Math.floor((counter/1000)%1000);
        counterFive = Math.floor((counter/10000)%10000);
};

setInterval(recarga, 1000)

const playBtn = document.querySelector(".start-button");
const pauseBtn = document.querySelector(".pause-button");
const restartBtn = document.querySelector(".restart-button");

playBtn.addEventListener("click", function(){
    isCounting = true;
})

pauseBtn.addEventListener("click", function(){
    isCounting = false;
})
restartBtn.addEventListener("click", function(){
    isCounting = false;
    counter = 0;
});

