import React, {useState } from "react";
import axios from "axios";

function UpdateBook()
{
    const [BId,setBId]=useState();
    const [BName,setBName]=useState();
    const [BPrice,setBPrice] = useState();

    const handleBIdText = (evt)=>{
        setBId(evt.target.value);
    }

    const handleBNameText =(evt)=>{
        setBName(evt.target.value);
    }

    const handleBPriceText =(evt)=>{
        setBPrice(evt.target.value);
    }

    const  handleSearchbutton = () =>{
        axios.get("http://localhost:9669/book/search/"+BId).then((res)=>{
            setBId(res.data.BId);
            setBName(res.data.BName);
            setBPrice(res.data.BPrice);
        }).catch((err)=>{
            alert(err);
        });
    }
    const handleUpdatebutton = () => {
    var obj = {
        BId: BId,
        BName: BName,
        BPrice: BPrice
    };
    axios.put("http://localhost:9669/book/edit/", obj).then((res) => {
        alert(res.data);
    }).catch((err) => {
        alert(err);
    });
}
return (
    <div>
        <center>
            <h4 style={{ backgroundColor: "red", color: "white" }}>Search Book Detaile and Update</h4>
            <table border={1}>
                <tr>
                    <td>Book ID :</td>
                    <td> <input type="number" onChange = {handleBIdText} value = {BId}/></td>
                </tr>
                <tr>
                    <td>Book Name :</td>
                    <td> <input type="text" onChange = {handleBNameText} value = {BName}/></td>
                </tr>
                <tr>
                    <td>Book Price :</td>
                    <td>
                        <input type="number" onChange = {handleBPriceText} value = {BPrice}/>
                    </td>
                </tr>
                <tr>
                    <td><button type="submit" onClick = {handleSearchbutton}>Search Book</button></td>
                    <td><button type="submit" onClick = {handleUpdatebutton}>Update Book</button></td>
                </tr>
            </table>
        </center>
    </div>
);
}export default UpdateBook;