// import React,{useEffect, useState}from "react";
// import axios from "axios";
// function ShowBook()
// {
//     const[Blist,setBList]=useState([]);

//     useEffect(()=>{

//         axios.delete("http://localhost:9669/book/show/"+BId).then((res)=>{
//             setBList(res.data);
//         }).catch((err)=>{
//             alert(err);
//         })
//     },[]);

//     // })
//     // const handleBIdText=(evt)=>{
//     //     setBId(evt,EventTarget.value);
//     // }
//     // const handleDeleteButton=()=>{
//     //     axios.delete("http://localhost:9669/book/remove/"+BId).then((res)=>{
//     //         alert(res.data);
//     //     }).catch((err)=>{
//     //         alert(err);
//     //     });
//     // }
//     return(
//         <div>
//             <center>
//                 <h4 style={{backgroundColor:"green",color:"white"}}>Book List</h4>
//                 <table border={1}>
//                 <tr>
//                     <th>Book Id</th>
//                     <th>Book Name</th>
//                     <th>Price</th>
//                 </tr>
//                {
//                 Blist.map((item)=>(
//                     <tr>
//                         <td>Book Id</td>
//                         <td>Book Name</td>
//                         <td>Price</td>
//                     </tr>
//                     {
//                         blist.map((item)=>(
//                             <tr>
//                             <td>(item.BId)</td>
//                             <td>(item.BName)</td>
//                             <td>(item.BPrice)</td>
//                             </tr>
//                         ))
//                     }

//                 ))
//                }
//                 </table>
//             </center>
//         </div>
//     )
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
//Show book function
function ShowBook() {
    const [Blist, setBList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9669/book/show")
            .then((res) => {
                setBList(res.data);
            })
            .catch((err) => {
                alert("Error fetching data: " + err);
            });
    }, []);

    return (
        <div>
            <center>
                <h4 style={{ backgroundColor: "green", color: "white" }}>Book List</h4>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Book Id</th>
                            <th>Book Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Blist.map((item, index) => (
                            <tr key={index}>
                                <td>{item.BId}</td>
                                <td>{item.BName}</td>
                                <td>{item.BPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
}

export default ShowBook;
