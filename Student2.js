import React,{useState} from "react";
import ReactDOM from "react-dom/client"
import Details2 from "./Details2";
//Student 2
function Student2()
{
    const [rno,setRno]=useState();
    const [sname,setSName]=useState();
    const [marks,setMarks]=useState();

    const handleRnoText=(evt)=>{
            setRno(evt.target.value);
    }

    
    const handleNameText=(evt)=>{
        setName(evt.target.value);
    }


    const handleMarksText=(evt)=>{
        setMarks(evt.target.value);
    }
    const handleSubmit=()=>{
        var obj={
            rno:rno,
            sname:sname,
            marks:marks
        };
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(
            <Details2 data={obj}></Details2>
        );
    }
    return(
        <div>
            <center>
                <h4>Props demo</h4>
                <table>
                    <tr>
                        <td>Roll NO.</td>
                        <td>
                            <input type="number" onChange={handleNameText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter Name</td>
                        <td>
                            <input type="text" onChange={handleNameText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter Marks</td>
                        <td>
                            <input type="text" onChange={handleNameText}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
}export default Student2;
