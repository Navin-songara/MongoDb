import React,{useState} from "react";
import axios from "axios";
import Home from "./Home";
import ReactDom from "react-dom/client";

function Login()
{
    const[uid,setUID]=useState();
    const[upass,setUPass]=useState();

    const handleUIDText=(evt)=>{
        setUID(evt.target.value);
    }

    const handleUPassText=(evt)=>{
        setUPass(evt.target.value);
    }

    const handleLoginButton=()=>{
        var obj={
            uid:uid,
            upass:upass
        };
        axios.post("http://localhost:9299/user/login",obj).then((res)=>{
            if(res.data.uid!=undefined)
            {
                const root=ReactDom.createRoot(document.getElementById("root"));
                var obj={
                    fullname:res.data.fullname,
                    picname:res.data.picname
                }
                root.render(<Home data={obj}/>);
            }
            else{
                alert("Invalid Id/Password")
            }
        }).catch((err)=>{
            alert(err);
        })
    }
    return(
        <div>
            <center>
                <h4>Login Form</h4>
                <table>
                    <tr>
                        <td>User ID</td>
                        <td>
                            <input type="text" onChange={handleUIDText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type="text" onChange={handleUPassText}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit" onClick={handleLoginButton}>Login</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
}export default Login;