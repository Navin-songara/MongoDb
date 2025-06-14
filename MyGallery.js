// Gallery
import React,{useState} from "react";
import rohit from "./images/rohit.jpg";
import jadeja from "./images/jadeja.jpg";
import klrahul from "./images/klrahul.jpg";
import kartik from "./images/dinesh.jpg";
import bumrah from "./images/bumrah.jpg";
function MyGallery(){
    const[player,setPlayer]=useState({});
    const[datalist,setDataList]=useState([{
        Name:"Rohit Sharma",
        Age:38,
        Runs:105000,
        Average:200,
        Photo:rohit
    },
    {
        Name:"Ravindra Jadeja",
        Age:39,
        Runs:75000,
        Average:250,
        Photo:jadeja
    },
    {
        Name:"K.L.Rahul",
        Age:29,
        Runs:9000,
        Average:150,
        Photo:klrahul
    },
    {
        Name:"Dinesh Kartik",
        Age:42,
        Runs:8000,
        Average:250,
        Photo:kartik
    },
    {
        Name:"Jaspreet Bumrah",
        Age:31,
        Runs:4000,
        Average:250,
        Photo:bumrah
    }
]);

const handleImageClick=(item)=>{
    setPlayer(item);
}
return(
    <div>
        <center>
            <table>
                <tr>
                    {
                        datalist.map((item)=>(
                            <td><img src={item.Photo} height={50} width={50}
                            onClick={()=>{handleImageClick(item)}}/></td>
                        ))
                    }
                </tr>
            </table>
            <table>
                <tr>
                    <td> <img src={player.Photo} height={300} width={300}/></td>
                    <td>
                        <table>
                            <tr>
                                <td>Name:</td>
                                <td>{player.Name}</td>
                            </tr>
                            <tr>
                                <td>Age:</td>
                                <td>{player.Age}</td>
                            </tr>
                            
                            <tr>
                                <td>Runs:</td>
                                <td>{player.Runs}</td>
                            </tr>
                            
                            <tr>
                                <td>Average:</td>
                                <td>{player.Average}</td>
                            </tr>
                            
                            {/* <tr>
                                <td>Photo:</td>
                                <td>{player.Photo}</td>
                            </tr> */}
            
                           
                        </table>
                    </td>
                </tr>
            </table>
        </center>
    </div>
)
       
}export default MyGallery;
