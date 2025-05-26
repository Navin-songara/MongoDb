// import React,{useEffect,useState} from "react";
// import axios from "axios";
// import CustomerHome from "./CustomerHome";
// import ReactDOM from "react-dom/client";
// import Cookies from'js-cookie';

// function CustomerLogin()
// {
//     const[uid,setUid]=useState();
//     const[upass,setUPass]=useState();
//     const[lschecked,setlsChecked]=useState(false);
    
//     const handleCUidText=(evt)=>{
//         setUid(evt.target.value);
//     }
//     const handleUPassText=(evt)=>{
//         setUPass(evt.target.value);
//     }
//     useEffect(()=>{
//         var myccokies=Cookies.get('auth');
//         if(myccokies!=undefined)
//         {
//             var obj=JSON.parse(myccokies);
//             //alert(obj.username);
//             setUid(obj.username);
//             setUPass(obj.password)
//         }
//     },[])
//     const handleLoginButton=()=>{

//         var obj={
//             CUserid:uid,
//             CUserPass:upass
//         }

//         axios.post("http://localhost:9191/customer/login",obj).then((res)=>{
//             if(res.data.CUserid!=undefined)
//             {
//                alert("User Not Active Please Wait for Admin Activation Process");
//                return; 
//             }
//             //cookies handling code
//             if(ischecked==true)
//             {
//                 const userData = {
//                     username:uid,
//                     password:upass
//                 };
//                 const expirationTime = new Date(new Data().getTime()+6000000);
//                 //store data in cookies
//                 Cookies.set('auth',JSON.stringify(userData),{expires:expirationTime});
//             }

//             //session handling code
//             const userSessionData ={
//                 userfullname:res.data.CustomerName
//             };
//             const sessionexpirationTime = new Date(new Date().getTime()+60000);
//             //store data in session
//             sessionStorage.setItem('sessionauth',JSON.stringify(userSessionData),sessionexpirationTime);

//             const root=ReactDOM.createRoot(document.getElementById("root"));
//             var obj={cfname:res.data.CustomerName,
//                 cpicname:res.data.CPicName,
//                 cid:res.data.Cid
//             }
//             root.render(<CustomerHome data={obj}></CustomerHome>)
//         }else{
//             alert("invalid id/Password");
//         });
//     }
//     const handleisRemember=()=>{
//         setisChecked(true);
//     }
//     return(
//         <div>
//             <center>
//                 <div className="jumbotron"></div>
//                 <h4 style={{backgroundColor:"yellow"}}>Customer Login</h4>
//                 <table>
//                     <tr>
//                         <td>User id</td>
//                         <td>
//                             <input type="text" className="form-control" onChange={handleCUidText}value={uid}/>
//                         </td>
//                     </tr>
//                      <tr>
//                         <td>Password</td>
//                         <td>
//                             <input type="password" onChange={handleCUPassText} className="form-control" value={upass}/>
//                         </td>  
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td>
//                            <button type="submit" className="btn btn-success" onClick={handleLoginButton}>Login</button>
//                         </td>  
//                     </tr>
//                     <tr>
//                     <td></td>
//                     <td>
//                         <input type="checkbox" onClick={handleisRemember}/>
//                         <spane>Remember</spane>
//                     </td>
//                     </tr>
//                 </table>
//             </center>
//         </div>
//     );
// }export default CustomerLogin   

import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomerHome from "./CustomerHome";
import ReactDOM from "react-dom/client";
import Cookies from 'js-cookie';

function CustomerLogin() {
    const [uid, setUid] = useState(); // User ID input ke liye
    const [upass, setUPass] = useState(); // Password input ke liye
    const [ischecked, setisChecked] = useState(false); // Remember me checkbox

    // User ID input ke text handle karne ke liye function
    const handleCUidText = (evt) => {
        setUid(evt.target.value);
    }

    // Password input ke text handle karne ke liye function
    const handleCUPassText = (evt) => {
        setUPass(evt.target.value);
    }

    // Component load hone pe cookies me data ho to usko use karo
    useEffect(() => {
        var myccokies = Cookies.get('auth');
        if (myccokies != undefined) {
            var obj = JSON.parse(myccokies);
            // agar cookies me data mila to set karo
            setUid(obj.username);
            setUPass(obj.password);
        }
    }, []);

    // Login button click hone pe function
    const handleLoginButton = () => {
        var obj = {
            CUserid: uid,
            CUserPass: upass
        };

        axios.post("http://localhost:9191/customer/login", obj).then((res) => {
            // agar user exist karta hai lekin active nahi hai
            if (res.data.CUserid != undefined) {
                alert("User Not Active Please Wait for Admin Activation Process");
                return;
            }

            // ✅ Remember me check ho to cookies set karo
            if (ischecked === true) {
                const userData = {
                    username: uid,
                    password: upass
                };
                const expirationTime = new Date(new Date().getTime() + 6000000); // expiry 100 min
                Cookies.set('auth', JSON.stringify(userData), { expires: expirationTime });
            }

            // ✅ Session me user ka data store karo
            const userSessionData = {
                userfullname: res.data.CustomerName
            };
            sessionStorage.setItem('sessionauth', JSON.stringify(userSessionData));

            // ✅ Login successful hone ke baad homepage pe bhejna
            const root = ReactDOM.createRoot(document.getElementById("root"));
            var obj = {
                cfname: res.data.CustomerName,
                cpicname: res.data.CPicName,
                cid: res.data.Cid
            };
            root.render(<CustomerHome data={obj} />);
        }).catch((err) => {
            // ✅ agar kuch galat hua ya user nahi mila
            alert("invalid id/Password");
        });
    }

    // Checkbox handle karne ka function
    const handleisRemember = () => {
        setisChecked(true);
    }

    return (
        <div>
            <center>
                <div className="jumbotron"></div>
                <h4 style={{ backgroundColor: "yellow" }}>Customer Login</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>User ID</td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={handleCUidText}
                                    value={uid}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input
                                    type="password"
                                    onChange={handleCUPassText}
                                    className="form-control"
                                    value={upass}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    onClick={handleLoginButton}
                                >
                                    Login
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="checkbox" onClick={handleisRemember} />
                                <span>Remember</span> {/* ✅ Fixed "spane" typo */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </div>
    );
}

export default CustomerLogin; // ✅ component export so that it can be used in other files
