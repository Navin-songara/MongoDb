import React, {useState } from "react";
import axios from "axios";

function SaveBook()
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

const handleSavebutton = () => {
    var obj = {
        BId: BId,
        BName: BName,
        BPrice: BPrice
    };
    axios.post("http://localhost:9669/book/save", obj).then((res) => {
        alert(res.data);
    }).catch((err) => {
        alert(err);
    });
}
return (
    <div>
        <center>
            <h4 style={{ backgroundColor: "green", color: "white" }}>Book Details Entry Form</h4>
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
                <tr>
                    <td><button type="submit" onClick = {handleSavebutton}>Save</button></td>
                </tr>
            </table>
        </center>
    </div>
);

}export default SaveBook;

