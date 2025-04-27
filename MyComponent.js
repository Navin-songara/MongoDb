// // example function component
// import React,{useState} from "react";

// function MyComponent()
// {
//     const[num1,setNum1]=useState();
//     const[num2,setNum2]=useState();
//     const[res,setRes]=useState();

//     const handleNum1Text=(evt)=>{
//         setNum1(evt.target.value);
//     }
    
//     const handleNum2Text=(evt)=>{
//         setNum1(evt.target.value);
//     }
    
//     const handleSumButton=()=>{
//         setRes(parseInt(num1)+parseInt(num2));
//     return(
//         <div>
//             <center>
//                 <h4>My First Function Component</h4>
//                 <table>
//                     <tr>
//                        <td>Enter First Number</td>
//                         <td>
//                             <input type="number" onChange={handleNum1Text}/>
//                         </td> 
//                     </tr>
//                     <tr>
//                        <td>Enter Second Number</td>
//                         <td>
//                             <input type="number" onChange={handleNum2Text}/>
//                         </td> 
//                     </tr>
//                     <tr>
//                        <td>Result</td>
//                         <td>
//                             <input type="text" value={res}/>
//                         </td> 
//                     </tr>
//                     <td></td>
//                     <td>
//                         <button type="submit" onClick={handleSumButton}>Sum</button>
//                     </td>
//                 </table>
//             </center>
//         </div>
//     )
// };
// }export default MyComponent;

import React, { useState } from "react";

function MyComponent() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [res, setRes] = useState('');

    const handleNum1Text = (evt) => {
        setNum1(evt.target.value);
    };

    const handleNum2Text = (evt) => {
        setNum2(evt.target.value); // ✅ FIXED: was setNum1
    };

    const handleSumButton = () => {
        setRes(parseInt(num1) + parseInt(num2));
    };

    return (
        <div>
            <center>
                <h4>My First Function Component</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>Enter First Number</td>
                            <td>
                                <input type="number" onChange={handleNum1Text} />
                            </td>
                        </tr>
                        <tr>
                            <td>Enter Second Number</td>
                            <td>
                                <input type="number" onChange={handleNum2Text} />
                            </td>
                        </tr>
                        <tr>
                            <td>Result</td>
                            <td>
                                <input type="text" value={res} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit" onClick={handleSumButton}>Sum</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </div>
    );
}export default MyComponent;
