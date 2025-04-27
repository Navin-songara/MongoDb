// import React,{userState} from "react";
// import React from "react-dom/client";
// import Details from "./Details";

// function Student()
// {
//     const [name,setName]=userState();

//     const handleNameText=(evt)=>{
//         setName(evt.target.value);
//     }
//     const handleSubmit=()=>{
//         const root=ReactDOM.createRoot(document.getElementById("root"));
//         root.render(
//             <Details ssname={name}/>
//         );
//     }
//     return(
//         <div>
//             <center>
//                 <h4>Props demo</h4>
//                 <table>
//                     <tr>
//                         <td>Enter Name</td>
//                         <td>
//                             <input type="text" onChange={handleNameText}/>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td>
//                             <button type="submit" onClick={handleSubmit}>Submit</button>
//                         </td>
//                     </tr>
//                 </table>
//             </center>
//         </div>
//     );
// }
// export default Student;
import React, { useState } from "react";
import Details from "./Details";

function Student() {
    const [name, setName] = useState("");

    const handleNameText = (evt) => {
        setName(evt.target.value);
    };

    const handleSubmit = () => {
        alert(`Name submitted: ${name}`);
        // Or pass name to another component via props or routing instead of ReactDOM here
    };

    return (
        <div>
            <center>
                <h4>Props demo</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>Enter Name</td>
                            <td>
                                <input type="text" onChange={handleNameText} />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit" onClick={handleSubmit}>Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Details ssname={name} />
            </center>
        </div>
    );
}

export default Student;
