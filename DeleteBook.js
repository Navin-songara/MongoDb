import React,{useState}from "react";
import axios from "axios";
function DeleteBook()
{
    const[BId,setBId]=useState();
    const handleBIdText=(evt)=>{
        setBId(evt,EventTarget.value);
    }
    const handleDeleteButton=()=>{
        axios.delete("http://localhost:9669/book/remove/"+BId).then((res)=>{
            alert(res.data);
        }).catch((err)=>{
            alert(err);
        });
    }
    return(
        <div>
            <center>
                <h4 style={{backgroundColor:"green",color:"white"}}>Delete Book Details By ID</h4>
                <table border={1}>
                <tr>
                    <td>Book ID :</td>
                    <td> <input type="number" onChange = {handleBIdText}/></td>
                </tr>
                <tr>
                    <td>Book Name :</td>
                    <td> <input type="text" onChange = {handleBNameText}/></td>
                </tr>
                <tr>
                    <td>Book Price :</td>
                    <td>
                        <input type="number" onChange = {handleBPriceText}/>
                    </td>
                </tr>
                <tr></tr>

                </table>
            </center>
        </div>
    )
}