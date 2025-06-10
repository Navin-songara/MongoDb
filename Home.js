import React from "react";
import axios from "axios";
//Home page
function Home(props)
{
    return(
        <div>
            <h4>User Home Page</h4>
            <p>Welcome {props.data.fullname}</p>
            <p>
                <img src={"http://localhost:9299/user/getimage/"+props.data.picname} height={100} width={100}/>
            </p>
        </div>
    );
}export default Home;
