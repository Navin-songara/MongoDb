// npm install react-blink-text --save --force

import React from "react";
import ecomm from "./images/ecom.png";
import Blink from "react-blink-text";
function Result(props)
{
    return(
        <div>
            <h4 style={{backgroundColor:"orangered",color:"white"}}>
                <img src={ecomm} height={80} width={80}/>Election Result
            </h4>
            <p style={{backgroundColor:"red",color:"white"}}>{props.data}</p>
            <Blink text={"Congratulation"+props.data}></Blink>
        </div>
    )
}export default Result;