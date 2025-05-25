import React,{useEffect,useState} from "react";
import axios from "axios";
import cart from"./cart.png";
import ReactDOM from"react-dom/client";
import Bill from"../customerviews/Bill";

function ProductList(props){
    const[itemcount,setitemCount]=useState(0);
    const[setitems,setSelitems]=useState([]);

    const[pcatglist,setPCatgList]=useState([]);

    const[plist,setPList]=useState([]);

    var cname="";

    useEffect(()=>{

        axios.get("http://localhost:9191/product/showproduct").then((res)=>{
            setPList(res.data);
        }).catch((err)=>{
            alert(err);
        });
        axios.get("http://localhost:9191/productcatg/showproductcatg").then((res)=>{
            setPCatgList(res.data);
        }).catch((err)=>{
            alert(err);
        });
    },[]);

    const handleBuyButton=(evt)=>{
        var pid=parseint(evt);
        var status="";
        axios.get("http://localhost:9191/product/showproductstatus/"+pid).then((res)=>{
            status=res.data.status;

            if(status=="Active")
            {
                setitemCount(itemcount+1);
                plist.map((item)=>{
                    if(item.pid==evt)
                    {
                        setSelitems.push(item);
                    }
                })
            }else{
                alert("Product out of stock");
            }
        }).catch((err)=>{
            alert(err);
        });

    }
    const handleCheckOutButton=()=>{
        //alert("Hello")
        if(setSelitems.length<=0)
        {
            alert("Please Buy Some Product");
        }else
        {
            const root=ReactDOM.createRoot(document.getElementById("root"));
            var ccid=props.data;
            var obj={
                selitems:selitems,
                cid:cid
            };
            root.render(<Bill data={obj}></Bill>)
        }
    }
    const handleSearch=(evt)=>{
        if(evt.target.value>0)
        {
            axios.get("http://localhost:9191/product/-showproductbycatgid/"+evt.target.value).then((res)=>{
                setPList(res.data);
            }).catch((err)=>{
                alert(err);
            });
        }else
        {
            axios.get("http://localhost:9191/product/showproduct").then((res)=>{
                setPList(res.data);
            }).catch((err)=>{
                alert(err);
            });
        }
    }

    return(
        <div>
            <h6>Customer id{props.data}</h6>
            <div>
                <img src={cart} height="50" width="50"/>
                <label>{itemcount}</label>
                <button type="submit" onClick={handleCheckOutButton}>CheckOut</button>
            </div>
            <center>

                Search By Category<select onClick={handleSearch}>
                    <option value="0">All</option>
                    {
                        pcatglist.map((pcatgitem)=>{
                            <option value={pcatgitem.pcatgid}>{pcatgitem.pcatgname}</option>
                        })
                    }
                    </select>

                    <p style={{backgroundColor:"green",color:"white"}}>ProductList</p>
                    <table border={1}>
                        <tr>
                            <th>id</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Offer Price</th>
                            <th>Category Name</th>
                            <th>Photo</th>
                            <th>Action</th>
                        </tr>
                        {
                           plist.map((item)=>{
                            <tr>
                                <td>{item.pid}</td>
                                <td>{item.pname}</td>
                                <td>{item.pprice}</td>
                                <td>{item.oprice}</td>
                                <td>
                                    {
                                        pcatglist.map((citen)=>{

                                            if(item.pcatgid==cityModel.pcatgid)
                                            {
                                                cname=(citen.pcatgname)
                                            }
                                        })
                                    }
                                    {cname}
                                </td>

                                <td>
                                    <img src={"http://localhost:9191/product/getproductimage/"+item.ppicname}
                                    height="100" width="100"/>
                                </td>
                                <td>
                                    <button type="submit" onClick={()=>handleBuyButton(item.pid)}>Buy</button>
                                </td>
                            </tr>
                           }) 
                        }
                    </table>
            </center>
        </div>
    );
}export default ProductList;