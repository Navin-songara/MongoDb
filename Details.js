// props is used to pass the data from one component to next component. 
//react-dom/client named library provides function to call a component from one component.

import React from "react";

function Details(props)
{
    return(
        <div>
            <center>
                <h4>Welcome {props.ssname}</h4>
        //Welcome page
            </center>
        </div>
    );
}export default Details;
