// import React,{usestate}from"react";
// import axios from"axios";

// function savebook()
// {
//  const[BId,setBId]=usestate();
//  const[BName,setBName]=usestate();
//  const[BPrice,setBPrice]=usestate();

// const handleBIdText=(evt)=>{
//     setBId(evt.target.value);
// }

// const handleBNameText=(evt)=>{
//     setBName(evt.target.value);
// }

// const handleBPriceText=(evt)=>{
//     setBPrice(evt.target.value);
// }

// const handleSaveButton=()=>{
//     var obj={
//         BId:BId,
//         BName:BName,
//         BPrice:BPrice
//     };

// axios.post("http://localhost:9069/book/Save",obj),then((res)=>{
//     alert(res.data);
// }).catch((err)=>{
//     alert(err);
// });
// }

// return{
//     <div>
//     <center>
//     <h4 style={{backgroundColor:"green",color:"white"}}>Book details Entery from </h4>
//     <table border={1}>
//     <tr>
//     <td>Book Id</td>
//     <td>
//     </td>
//     </tr>
//     </center>
//     </div>
// }
// }

// import React,{usestate}from"react";
// import axios from"axios";

// function updatebook()
// {
//  const[BId,setBId]=usestate();
//  const[BName,setBName]=usestate();
//  const[BPrice,setBPrice]=usestate();

// const handleBIdText=(evt)=>{
//     setBId(evt.target.value);
// }

// const handleBNameText=(evt)=>{
//     setBName(evt.target.value);
// }

// const handleBPriceText=(evt)=>{
//     setBPrice(evt.target.value);
// }

// const handleSearchButton=()=>{
// axios.get("http://localhost:9669/book/Search"+BId),then((res)=>{
//     setBId(res.data.BId);
//     setBName(res.data.BName);
//     setBPrice(res.data.BPrice);
// }).catch((err)=>{
//     alert(err);
// });
// }

// const handleUpdateButton=()=>{
//     var obj={
//         BId:BId,
//         BName:BName,
//         BPrice:BPrice
//     };
//     axios.put("http://localhost:9669/book/edit/",obj),then((res)=>{
//         alert(res.data);
//     }).catch((err)=>{
//         alert(err);
//     });
// }
// return{
//     <div>
//     <center>
//     <h4 style={{backgroundColor:"green",color:"white"}}>Search Book details and update</h4>
//     <table border={1}>
//     <tr>
//     <td>Enter book Id</td>
//     <td>
//     <input type="text" onChange={handleBIdText} value={BId}/>
//     <button type="submit" onClick={handleSearchButton}>Search</button>
//     </td>
//     </tr>
//     <tr>
//     <td>Book Name</td>
//     <td>
//     <input type="text" onChange={handleBNameText} value={BName}/>
//     </td>
//     </tr>
//     <tr>
//     <td>Book Name</td>
//     <td>
//     <input type="number" onChange={handleBPriceText} value={BPrice}/>
//     </td>
//     </tr>
//     <tr>
//     <td></td>
//     <td>
//     <button type="submit" onClick={handleUpdateButton}>Update</button>
//     </td>
//     </tr>
//     </table>
//     </center>
//     </div>
// };
// }export default updatebook;
//Save book
import React, { useState } from "react";
import axios from "axios";

function UpdateBook() {
  const [BId, setBId] = useState("");
  const [BName, setBName] = useState("");
  const [BPrice, setBPrice] = useState("");

  const handleBIdText = (evt) => {
    setBId(evt.target.value);
  };

  const handleBNameText = (evt) => {
    setBName(evt.target.value);
  };

  const handleBPriceText = (evt) => {
    setBPrice(evt.target.value);
  };

  const handleSearchButton = () => {
    axios
      .get("http://localhost:9669/book/Search/" + BId)
      .then((res) => {
        setBId(res.data.BId);
        setBName(res.data.BName);
        setBPrice(res.data.BPrice);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleUpdateButton = () => {
    const obj = {
      BId: BId,
      BName: BName,
      BPrice: BPrice,
    };

    axios
      .put("http://localhost:9669/book/edit/", obj)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <center>
        <h4 style={{ backgroundColor: "green", color: "white" }}>
          Search Book Details and Update
        </h4>
        <table border={1}>
          <tbody>
            <tr>
              <td>Enter Book ID</td>
              <td>
                <input type="text" onChange={handleBIdText} value={BId} />
                <button type="submit" onClick={handleSearchButton}>
                  Search
                </button>
              </td>
            </tr>
            <tr>
              <td>Book Name</td>
              <td>
                <input type="text" onChange={handleBNameText} value={BName} />
              </td>
            </tr>
            <tr>
              <td>Book Price</td>
              <td>
                <input
                  type="number"
                  onChange={handleBPriceText}
                  value={BPrice}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit" onClick={handleUpdateButton}>
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default UpdateBook;
