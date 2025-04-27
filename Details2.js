import React from "react";

function Details2(props)
{
    return(
        <div>
            <center>
                <h4>Welcome</h4>
                <p>RollNo:-{props.data.rno}</p>
                <p>RollNo:-{props.data.sname}</p>
                <p>RollNo:-{props.data.marks}</p>
            </center>
        </div>
    );
}export default Details2;