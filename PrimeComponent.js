import React,{useState} from "react";

function PrimeComponent()
{
    const[num,setNum]=useState();
    const[res,setRes]=useState();

    const handleNumText=(evt)=>{
        setNum(evt.target.value);
    }
    const handleCheckButton=()=>{
        var i,c=0;
        for(i=1;i<=num;i++)
        {
            if(num%i==0){
                c=c+1;
            }
            if(c==2){
                setRes("Number is Prime");
            }else{
                setRes("Number is not prime");
            }
        }
    }
    return(
        <div>
            <center>
                <h4>Check Prime or Not Prime</h4>
                <table>
                    <tr>
                        <td>Enter Number</td>
                        <td>
                            <input type="number" onChange={handleNumText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Result</td>
                        <td>
                            <input type="text" value={res}/>
                        </td>
                    </tr>
                    <tr>
                        <tr>click here</tr>
                        <td>
                            <button type="submit" onClick={handleCheckButton}>Check</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
}export default PrimeComponent;