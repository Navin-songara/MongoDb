// import React,{useState} from "react";

// function Student()
// {
//     const [token,setToken]=useState();
//     const[tokenauthresult,setTokenAuthResult]=useState();
//     const handleGenerateTokenButton=async()=>{


//         const response=await fetch('http://localhost:5678/user/generateToken',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json',
//             },
//             body:JSON.stringify({ username:'admin', password:'admin123'}),
//              });

//              const data=await response.json();

//              if(response.ok){
//                 setToken(data.token);
//                 //Save the token in client-side storage (e.g., local storage or a cokie)
//                 localStorage.setItem('token',data.token)
//              }else{
//                 alert(data.error)
//              }
//              alert(token)
//     }
//     const handleAuthenticate=async()=>{
//         alert("pass token:-"+token)
//         const response=await fetch('http://localhost:5678/user/validateToken',{
//             method:"GET",
//             headers:{
//                 'Content-Type':'application/json',
//                 Authorization:Bearer ${token}
//             },
            
//         });
//         //alert(response.data)
//         if(response.ok){
//             const data=await response.json();
//             alert(data.messege);
//             setTokenAuthResult(data.messege);

//         }else{
//             alert('Unauthorized');
//         }
//     };
//     return(
//         <div>
//             <center>
//                 <h4>JWT Authentication DEMO</h4>
//                 <button type="submit"  onClick={handleGenerateTokenButton}>Generate Token</button>

//                 <button type="submit"  onClick={handleAuthenticate}>Authenticate</button>
//                 <p>
//                     <label>{token}</label>
//                 </p>
//                 <p>
//                     <label>{tokenauthresult}</label>
//                 </p>
//             </center>
//         </div>

//     )
// }export default Student;


import React, { useState } from "react";
//student function
function Student() {
    const [token, setToken] = useState();
    const [tokenAuthResult, setTokenAuthResult] = useState();

    const handleGenerateTokenButton = async () => {
        try {
            const response = await fetch('http://localhost:5678/user/generateToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: 'admin', password: 'admin123' }),
            });

            const data = await response.json();

            if (response.ok) {
                setToken(data.token);
                localStorage.setItem('token', data.token);
                alert('Token generated successfully');
            } else {
                alert(data.error || 'Token generation failed');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    const handleAuthenticate = async () => {
        try {
            const storedToken = localStorage.getItem('token') || token;
            alert("Pass token: " + storedToken);

            const response = await fetch('http://localhost:5678/user/validateToken', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${storedToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                setTokenAuthResult(data.message);
            } else {
                alert('Unauthorized');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <div>
            <center>
                <h4>JWT Authorization Demo</h4>
                <button onClick={handleGenerateTokenButton}>Generate Token</button>
                <button onClick={handleAuthenticate}>Validate Token</button>
                <p><label>Token: {token}</label></p>
                <p><label>Validation Result: {tokenAuthResult}</label></p>
            </center>
        </div>
    );
}

export default Student;
