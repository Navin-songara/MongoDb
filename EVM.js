import React,{useState} from "react";
import Result from"./Result";
import ReactDOM from "react-dom/client";
import aap from"./images/aap.jpg";
import congress from"./images/congress.png";
import bjp from"./images/bjp.jpg";
import ecomm  from"./images/ecom.png";

function EVM()
{
    const[bjpcounter,setBjpcounter]=useState(0);
    const[congresscounter,setCongresscounter]=useState(0);
    const[aapcounter,setAapcounter]=useState(0);
    const handleBjpButton=()=>{
        setBjpcounter(bjpcounter+1);
    }
    const handleCongressButton=()=>{
        setCongresscounter(congresscounter+1);
    }
    const handleAapButton=()=>{
        setAapcounter(aapcounter+1);
    }
    const handleResultButton=()=>{
        const root=ReactDOM.createRoot(document.getElementById("root"));
        if(bjpcounter>congresscounter&&bjpcounter>aapcounter)
        {
            root.render(<Result data={"BJP is Winner"}></Result>)
        }
        if(congresscounter>bjpcounter&&congresscounter>aapcounter)
            {
                root.render(<Result data={"Congress is Winner"}></Result>)
            }
        if(aapcounter>congresscounter&&aapcounter>bjpcounter)
            {
                root.render(<Result data={"AAP is Winner"}></Result>)
            }
    }
    const handlefarjiButton=()=>{
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<Result data={"BJP Is Winner"}></Result>)
    }
    return(
        <div>
            <center>
                <h4 style={{backgroundColor:"orangered,color:white"}}><img src={ecomm} height={50} width={50}/>Bhartiya Ekectronic Votting Machine</h4>
                <table border={1}>
                <tr>
                    <th>Netaji ka Code</th>
                    <th>Netaji ka Naam</th>
                    <th>Chunav Chinh</th>
                    <th>Vote</th>
                    <th>Counting</th>
                </tr>
                <tr>
                <td>1001</td>
                <td>Arvind Kejariwal</td>
                <td><img src={aap} height={50} width={50}/></td>
                <td><button type="submit" onClick={handleAapButton}>AAP</button></td>
                <td>{aapcounter}</td>

                </tr>

                <tr>
                <td>1002</td>
                <td>Narendra Modi</td>
                <td><img src={bjp} height={50} width={50}/></td>
                <td><button type="submit" onClick={handleBjpButton}>BJP</button></td>
                <td>{bjpcounter}</td>

                </tr>
                <tr>
                <td>1003</td>
                <td>Rahul Gandhi</td>
                <td><img src={congress} height={50} width={50}/></td>
                <td><button type="submit" onClick={handleCongressButton}>Congress</button></td>
                <td>{congresscounter}</td>
                </tr>
                </table>
                <button type="submit" onClick={handleResultButton}>Chunav Parinam</button>
                <button type="submit" onClick={handlefarjiButton}></button>
            </center>
        </div>
    );
}export default EVM;
