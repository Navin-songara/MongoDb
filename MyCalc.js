// import React,{useState} from "react";
// function MyCalc()
// {
//     const[num1,setNum1]=useState('');
//         const[res,setRes]=useState('');
//         const[optr,setOptr]=useState('');

//         const handleNumberButton=(evt)=>{
//             setRes(res+evt.target.innerText);
//         }
//         const handleOperationButton=(evt)=>
//         {
//             setNum1(parseInt(res));
//             setRes(res+evt.target.innerText);
//             switch(evt.target.name)
//             {
//                 case "btnpls":
//                             setOptr("+");
//                             break;
//                 case "btnmins":
//                             setOptr("-");
//                             break;
//               case "btnmulti":
//                      setOptr("*");
//                    break;
//              case "btndiv":
//                       setOptr("/");
//                     break;
                
//             }
//         }
//         const handleEqualButton=(evt)=>{
//         var a=parseInt(num1);
//         var optindex=res.indexOf(optr);
//         var secondnum="";
//         for(var i=optindex+1;i<res.length;i++)
//         {
//             secondnum+=res[i];
//         }
//         var b=parseInt(parseInt(secondnum));
//         var c;
//         setRes("");
//         switch(optr)
//         {
//             case "+":
//                 c=a+b;
//                 break;
//             case "-":
//                 c=a-b;
//                 break;
//             case "*":
//                 c=a*b;
//                 break;
//             case "/":
//                 c=a/b;
//                 break;            
//         }
//         setRes(c);
//         }
//         const handleclearButton=()=>{
//             setRes(res.slice(0,-1));
//         }
    
//         return(
//             <center>
//                 <div style={{backgroundColor:"yellow",borderRadius:20,height:200,
//                     width:300,alignItems:"center",border:"solid",borderBlockColor:"red"}}
//                 />
//             <center>
//                 <input type="text" value={res} style={{marginTop:10}}/>
//                 <p></p>
//                 <table>
//                     <tr>
//                         <td>
//                             <button type="submit" onClick={handleNumberButton}
//                             name="btn1" style={{marginleft:2}}>1</button>
//                         </td>
                        
//                         <td>
//                             <button type="submit" onClick={handleNumberButton}
//                             name="btn2" style={{marginleft:2}}>2</button>
//                         </td>

                        
//                         <td>
//                             <button type="submit" onClick={handleNumberButton}
//                             name="btn3" style={{marginleft:2}}>3</button>
//                         </td>

                        
//                         <td>
//                             <button type="submit" onClick={handleNumberButton}
//                             name="btn4" style={{marginleft:2}}>4</button>
//                         </td>

                        
//                         <td>
//                             <button type="submit" onClick={handleNumberButton}
//                             name="btn5" style={{marginleft:2}}>5</button>
//                         </td>

                        
//                         <td>
//                             <button type="submit" onClick={handleNumberButton}
//                             name="btn6" style={{marginleft:2}}>6</button>
//                         </td>

                        
//                         <td>
//                             <button type="submit" onClick={handleNumberButton}
//                             name="btn7" style={{marginleft:2}}>1</button>
//                         </td>

                        
//                         <td>
//                             <button type="submit" onClick={handleNumberButton}
//                             name="btn8" style={{marginleft:2}}>8</button>
//                         </td>

                        
//                         <td>
//                             <button type="submit" onClick={handleOperationButton}
//                             name="btn0" style={{marginleft:2}}>0</button>
//                         </td>

                        
//                         <td>
//                             <button type="submit" onClick={handleOperationButton}
//                             name="btnpls" style={{marginleft:2}}>+</button>
//                         </td>

                        
//                         <td>
//                             <button type="submit" onClick={handleOperationButton}
//                             name="btnminus" style={{marginleft:2}}>-</button>
//                         </td>

                        
//                         <td>
//                             <button type="submit" onClick={handleOperationButton}
//                             name="btnmulti" style={{marginleft:2}}>*</button>
//                         </td>

                        
//                         <td>
//                             <button type="submit" onClick={handleOperationButton}
//                             name="btndiv" style={{marginleft:2}}>/</button>
//                         </td>


//                         <td>
//                             <button type="submit" onClick={handleEqualButton}
//                             name="btnequal" style={{marginleft:2}}>=</button>
//                         </td>
                        
//                         <td>
//                             <button type="submit" onClick={handleClearButton}
//                             name="btnclear" style={{marginleft:2}}>X</button>
//                         </td>
//                     </tr>
//                 </table>
//             </center>
//         <div/>
//         </center>
//         );
// }
// export default MyCalc;




// import React, { useState } from "react";

// function MyCalc() {
//     const [num1, setNum1] = useState('');
//     const [res, setRes] = useState('');
//     const [optr, setOptr] = useState('');

//     const handleNumberButton = (evt) => {
//         setRes(res + evt.target.innerText);
//     };

//     const handleOperationButton = (evt) => {
//         setNum1(parseInt(res));
//         setRes(res + evt.target.innerText);
//         switch (evt.target.name) {
//             case "btnpls":
//                 setOptr("+");
//                 break;
//             case "btnminus":
//                 setOptr("-");
//                 break;
//             case "btnmulti":
//                 setOptr("*");
//                 break;
//             case "btndiv":
//                 setOptr("/");
//                 break;
//             default:
//                 break;
//         }
//     };

//     const handleEqualButton = () => {
//         var a = parseInt(num1);
//         var optindex = res.indexOf(optr);
//         var secondnum = "";
//         for (var i = optindex + 1; i < res.length; i++) {
//             secondnum += res[i];
//         }
//         var b = parseInt(secondnum);
//         var c;
//         setRes("");
//         switch (optr) {
//             case "+":
//                 c = a + b;
//                 break;
//             case "-":
//                 c = a - b;
//                 break;
//             case "*":
//                 c = a * b;
//                 break;
//             case "/":
//                 c = a / b;
//                 break;
//             default:
//                 c = 0;
//         }
//         setRes(c.toString());
//     };

//     const handleClearButton = () => {
//         setRes(res.slice(0, -1));
//     };

//     return (
//         <center>
//             <div style={{
//                 backgroundColor: "yellow",
//                 borderRadius: 20,
//                 height: 300,
//                 width: 300,
//                 alignItems: "center",
//                 border: "solid",
//                 borderColor: "red",
//                 padding: 10
//             }}>
//                 <center>
//                     <input type="text" value={res} style={{ marginTop: 10, width: "90%" }} readOnly />
//                     <p></p>
//                     <table>
//                         <tbody>
//                             <tr>
//                                 {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((num) => (
//                                     <td key={num}>
//                                         <button type="button" onClick={handleNumberButton} style={{ marginLeft: 2 }}>{num}</button>
//                                     </td>
//                                 ))}
//                                 <td>
//                                     <button type="button" name="btnpls" onClick={handleOperationButton} style={{ marginLeft: 2 }}>+</button>
//                                 </td>
//                                 <td>
//                                     <button type="button" name="btnminus" onClick={handleOperationButton} style={{ marginLeft: 2 }}>-</button>
//                                 </td>
//                                 <td>
//                                     <button type="button" name="btnmulti" onClick={handleOperationButton} style={{ marginLeft: 2 }}>*</button>
//                                 </td>
//                                 <td>
//                                     <button type="button" name="btndiv" onClick={handleOperationButton} style={{ marginLeft: 2 }}>/</button>
//                                 </td>
//                                 <td>
//                                     <button type="button" onClick={handleEqualButton} style={{ marginLeft: 2 }}>=</button>
//                                 </td>
//                                 <td>
//                                     <button type="button" onClick={handleClearButton} style={{ marginLeft: 2 }}>X</button>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </center>
//             </div>
//         </center>
//     );
// }

// export default MyCalc;
 
// my calculator 

import React, { useState } from "react";

function MyCalc() {
    const [num1, setNum1] = useState('');
    const [res, setRes] = useState('');
    const [optr, setOptr] = useState('');

    const handleNumberButton = (evt) => {
        setRes(res + evt.target.innerText);
    };

    const handleOperationButton = (evt) => {
        setNum1(parseInt(res));
        setRes(res + evt.target.innerText);
        switch (evt.target.name) {
            case "btnpls":
                setOptr("+");
                break;
            case "btnminus":
                setOptr("-");
                break;
            case "btnmulti":
                setOptr("*");
                break;
            case "btndiv":
                setOptr("/");
                break;
            default:
                break;
        }
    };

    const handleEqualButton = () => {
        var a = parseInt(num1);
        var optindex = res.indexOf(optr);
        var secondnum = "";
        for (var i = optindex + 1; i < res.length; i++) {
            secondnum += res[i];
        }
        var b = parseInt(secondnum);
        var c;
        setRes("");
        switch (optr) {
            case "+":
                c = a + b;
                break;
            case "-":
                c = a - b;
                break;
            case "*":
                c = a * b;
                break;
            case "/":
                c = a / b;
                break;
            default:
                c = 0;
        }
        setRes(c.toString());
    };

    const handleClearButton = () => {
        setRes(res.slice(0, -1));
    };

    return (
        <center>
            <div style={{
                backgroundColor: "yellow",
                borderRadius: 20,
                height: 400,
                width: 320,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "2px solid red",
                padding: 10
            }}>
                <input 
                    type="text" 
                    value={res} 
                    style={{
                        marginBottom: 10, 
                        width: "90%", 
                        height: "40px", 
                        fontSize: "20px", 
                        textAlign: "right", 
                        paddingRight: 10
                    }} 
                    readOnly 
                />
                <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 5 }}>
                    <button onClick={handleNumberButton}>1</button>
                    <button onClick={handleNumberButton}>2</button>
                    <button onClick={handleNumberButton}>3</button>
                    <button onClick={handleNumberButton}>4</button>

                    <button onClick={handleNumberButton}>5</button>
                    <button onClick={handleNumberButton}>6</button>
                    <button onClick={handleNumberButton}>7</button>
                    <button onClick={handleNumberButton}>8</button>

                    <button onClick={handleNumberButton}>9</button>
                    <button onClick={handleNumberButton}>0</button>
                    <button name="btnpls" onClick={handleOperationButton}>+</button>
                    <button name="btnminus" onClick={handleOperationButton}>-</button>

                    <button name="btnmulti" onClick={handleOperationButton}>*</button>
                    <button name="btndiv" onClick={handleOperationButton}>/</button>
                    <button onClick={handleEqualButton}>=</button>
                    <button onClick={handleClearButton}>X</button>
                </div>
            </div>
        </center>
    );
}

export default MyCalc;
