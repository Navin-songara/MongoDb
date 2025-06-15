// User id , photo etc
import React,{useState} from 'react';
import axios from 'axios';
function Registration()
{
    const[uid,setUID]=useState();
    const[upass,setUPass]=useState();
    const[fullname,setFullName]=useState();
    const[picname,setPicName]=useState();
    const[image,setImage]=useState({preview:",data:"});

    const handleUIDText=(evt)=>{
        setUID(evt.target.value);
    }

    const handleUPassText=(evt)=>{
        setUPass(evt.target.value);
    }

    const handleFullNameText=(evt)=>{
        setFullName(evt.target.value);
    }

    const handleFileChange=(evt)=>{
        setPicName(evt.target.files[0].name);
        setImage({
            preview:"",
            data :evt.target.files[0]
        })
    }

    const handleRegisterButton=async()=>{
        var obj={
            uid:uid,
            upass:upass,
            fullname:fullname,
            picname:picname
        };
        axios.post("http://localhost:9299/user/register",obj).then((res)=>{
            alert(res.data);
        }).catch((err)=>{
            alert(err);
        });
        let formData=new FormData()
        formData.append('file',image.data);
        const response=await fetch('http://localhost:9299/user/register/uploadimages',{
            method:'POST',
            body:formData,
        });
    }
    return(
        <div>
            <center>
                <table>
                    <tr>
                        <td>User ID</td>
                        <td>
                            <input type='text' onChange={handleUIDText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type="password" onChange={handleUPassText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Full Name</td>
                        <td>
                            <input type="text" onChange={handleFullNameText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Select Photo</td>
                        <td>
                            <input type="file" onChange={handleFileChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit" onClick={handleRegisterButton}>Register</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
}export default Registration;
