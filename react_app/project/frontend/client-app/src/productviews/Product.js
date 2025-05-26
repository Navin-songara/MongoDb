import React,{useEffect, useState, usestate} from "react";
import axios from "axios";
function Product(props){
    const[pid,setPid]=useState();
    const[pname,setPName]=useState();
    const[pprice,setPPrice]=useState();
    const[oprice,setOPrice]=useState();
    const[ppicname,setPPicName]=useState();
    const[pcatgid,setPCatgld]=useState();
    const[pcatglist,setPCatgList]=useState([]);
    const[image,setimage]=useState({preview:",data:"});
    const[status,setStatus]=useState('');
    const[plist,setPList]=useState([]);
    var cname="";
    var catgname="";

    var venderid=props.data==undefined?0:props.data;

    const handlePidText=(evt)=>{
        setPid(evt.target.value);
    }
    const handlePNameText=(evt)=>{
        setPName(evt.target.value);
    }
      const handlePPriceText=(evt)=>{
        setPPrice(evt.target.value);
    }
      const handleOPriceText=(evt)=>{
        setOPrice(evt.target.value);
    }
      const handlePCatgSelect=(evt)=>{
        setPCatgid(evt.target.value);
    }
    useEffect(()=>{

        // var venderid=props.data==undefined?0:props.data;
            alert("VID="+venderid)
        axios.get("http://localhost:9191/product/getmaxpid").then((res)=>{
            setPid(res.data.length+1);
        }).catch((err)=>{
            alert(err);
        });
        axios.get("http://localhost:9191/productcatg/showproductcatg").then((res)=>{
            setPCatgList(res.data);
        }).catch((err)=>{
            alert(err);
        });

    },[]);
    const handleSaveButton=()=>{



    var obj={
        pid:pid,
        pname:pname,
        pprice:pprice,
        ppicname:ppicname,
        pcatgid:pcatgid,
        vid:venderid,
        status:"Active"
    };
    axios.post("http://localhost:9191/product/saveproduct/",obj).then((res)=>{
        alert("Product Saved");
    }).catch((err)=>{
        alert(err);
    });
    }
    const handleShowButton=()=>{
        axios.get("http://localhost:9191/product/-showproductbyvender/"+venderid).then((res)=>{
            setPList(res.data);
        }).catch((err)=>{
            alert(err);
        });
    }
    //browse and save image code
    const handleSubmit=async(evt)=>{
        evt.preventDefault()
        let formData=new FormData()
        formData.append('file',image.data);
        const response = await fetch('http://localhost9191/product/saveproductimage',{
            method:'POST',
            body:formData,
        })

        if(response){
            if(response.statusText=="ok")
            {
                setStatus("Failed to Upload File")
            }
        }
    }
    const handleFileChange = (evt) =>{
        const img = {
            preview:URL.createObjectURL(evt.target.files[0]),
            data:evt.target.files[0]
        }
        setimage(img)
        setPPicName(evt.target.files[0].name);
    }
    const handleNewButton=()=>{
        axios.get("http://localhost:9191/product/getmaxpid").then((res)=>{
            setPid(res.data.length+1);
            setPName("");
            setPCatgld("");
            setPPrice("");
            setOPrice("");
            setimage("");
        }).catch((err)=>{
            alert(err);
        });
    }
    return(
        <div>
            <center>
                <p>Vender id {venderid}</p>
                <p style={{backgroundColor:"green",color:"white"}}>Product Form</p>
                <div className="jumbotron" style={{marginLeft:20,marginRight:20,borderRadius}}></div>
                {/* bohut sari cheez gyab h photo me se tou jo h age ka vo likh ra hu */}

                <tr>
                    <td>Price</td>
                    <td>
                        <input type="number" onChange={handlePPriceText} value={pprice}
                        />
                    </td>
                </tr>
                <tr>
                    <td>Offer Price</td>
                    <td>
                        <input type="number" onChange={handleOPriceText}
                        value={oprice}/>
                    </td>
                </tr>
                <tr>
                    <td>Select Photo</td>
                    <td>
                        <input type="file" onChange={handleFileChange} name="file"/>
                        <img src={image.preview} width='100' height='100'/>
                    </td>
                </tr>
                <tr>
                    <td>Click To Upload Product</td>
                    <td>
                      <button type="submit" onClick={handleSubmit}>Upload</button>
                    </td>
                </tr>
                <tr>
                    <td>Category</td>
                    <td>
                        <select onClick={handlePCatgSelect}>
                            {
                                pcatglist.map((item)=>(
                                    <option value={item.pcatgid}>{item.pcatgname}</option>
                                ))
                            }</select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="submit" onClick={handleNewButton}>New</button>
                    </td>
                    <td>
                        <button type="submit" onClick={handleSaveButton}>Save</button>
                    </td>
                    <td>
                        <button type="submit" onClick={handleShowButton}>Show</button>
                    </td>
                </tr>
                <table>
                    <div>
                        <p style={{backgroundColor:"green",color:"white"}}>Product List</p>
                        <div className="jumbotron" style={{marginLeft:20,marginRight:20,borderRadius:-5}}/>
                        <table border={0}>
                            <tr>
                                <th>SNO</th>
                                <th>Product id</th>
                                <th>Offer Price</th>
                                <th>Category Name</th>
                                <th>Photo</th>
                            </tr>
                            {
                                plist.map((item,index)=>{
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.pid}</td>
                                        <td>{item.pname}</td>
                                        <td>{item.pprice}</td>
                                        <td>{item.oprice}</td>
                                        <td>
                                            {
                                                pcatglist.map((citem)=>{
                                                
                                                    if(item.pcatgid==citem.pcatgid)
                                                    {
                                                        cname=(citem.pcatgname)
                                                    }
                                                })
                                            }
                                            {cname}
                                        </td>
                                        <td>
                                            <img src={"http://localhost:9191/product/getproductimage/"+item.ppicname}
                                            height="100"width="100"/>
                                        </td>
                                    </tr>
                                })
                            }
                        </table>
                    </div>
                </table>
            </center>
        </div>
    );
}export default Product;