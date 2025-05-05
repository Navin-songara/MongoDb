//Open terminal and run command >npm install axios --save
/* axios inbuilt library it provides functions to connect backend application*/
import React,{useState} from "react";
import axios from "axios";
function Student()
{
    const[picname,setPicName]=useState();
    const[image,setImage]=useState({preview:",data:"})
    const[status,setStatus]=useState('')
    //handle file brows event
    const handleFileChange =(evt)=>{
        const img = {
            preview: URL.createObjectURL(evt.target.files[0]),
            data:evt.target.files[0]
        }
        //URL.createObjecctURL() inbluit function and is used to get the path of browsed image and display preview
        setImage(img)
        setPicName(evt.target.files[0].name);
    }
    //browse and save image code 
    const handleSubmit = async (evt)=>{
        evt.preventDefault()//avoid page refresh event
        let formData = new FormData();//FromData inbuilt class and used to collect information or data of file to send server side
        formData.append('file',image.data);
        //fetch() function used to send data from client side to server side and also used to get data from server side to client side.fetch is promise based function.
        const response=await fetch('http://localhost:5040/uploadimage',{
            method:'POST',
            body:formData
        })
        if(response){
            setStatus("File Uploaded Successfully");
        }else{
            alert("Failed to Upload File");
        }
    }
    return(
        <div>
            <center>
                <form>
                    <table>
                        <tr>
                            <td>Select Photo</td>
                            <td>
                                <input type="file" onChange={handleFileChange} name="file"/>
                                <img src={image.preview} width='100' height='100'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Click to Upload File</td>
                            <td>
                                <button type="submit" onClick={handleSubmit}>Upload</button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                {status&& <p>{status}</p>}
                            </td>
                        </tr>
                    </table>
                </form>
            </center>
        </div>
        
    );
}export default Student;