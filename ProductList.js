// Product List with image
import React,{ useState } from "react"
import tv from "./images/tv.jpg";
import ac from "./images/ac.jpg";
import freedge from "./images/freedge.jpg";
import bellan from "./images/bellan.jpg";
import wm from "./images/wm.jpg";
import cart from "./images/cart.jpg";
import mixter from "./images/mixter.jpg";
import Bill from "./BIll";
import ReactDom from "react-dom/client";

function ProductList()
{
    const[setitems,setSelItems]=useState([]);
    const[pid,setPId]=useState([]);
    const[pname,setPName]=useState([]);
    const[price,setPPrice]=useState([]);
    const[itemcount,setitemCount]=useState(0);

    const handleBuyButton=(evt)=>{
        setitemCount(itemcount+1);
        if(evt.target.name==="btntv")
        {
            var item={
                pid:101,
                pname:"TV",
                price:35000,
                picname:tv
            }
            selitems.push(item)
        }
        if(evt.target.name==="btnfrg")
            {
                var item={
                    pid:102,
                    pname:"freedge",
                    price:55000,
                    picname:freedge
                }
                selitems.push(item)
            }
        if(evt.target.name==="btnwn")
            {
                var item={
                    pid:103,
                    pname:"Washing Machine",
                    price:25000,
                    picname:wn
                }
                selitems.push(item)
            }
            if(evt.target.name==="btnac")
                {
                    var item={
                        pid:104,
                        pname:"AC",
                        price:125000,
                        picname:ac
                    }
                    selitems.push(item)
                }
                if(evt.target.name==="btnbln")
                    {
                        var item={
                            pid:105,
                            pname:"Bellen",
                            price:111,
                            picname:bellan
                        }
                        selitems.push(item)
                    }
                    if(evt.target.name==="btnmix")
                        {
                            var item={
                                pid:106,
                                pname:"Mixter",
                                price:5500,
                                picname:mixter
                            }
                            selitems.push(item)
                        }
                        
    }
    const handleCheckOutButton=()=>{
        const root=ReactDom.createRoot(document.getElementById("root"));
        root.render(<Bill data={selitems}></Bill>)
    }
    return(
        <div style={{backgroundColor:"white"}}>
        <div >
            <img src={cart} height="50" width="50"/>
            <label>{itemcount}</label>
            <button type="submit" onClick={handleCheckOutButton}>CheckOut</button>
            </div>
            <center>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Photo</th>
                        <th></th>
                    </tr>

                    <tr>
                        <td>101</td>
                        <td>TV</td>
                        <td>35000</td>
                        <td>
                            <img src={tv} height="100" width="150"/>
                        </td>
                        <td>
                            <button type="submit" onClick={handleBuyButton} name="btntv" >Buy</button>
                        </td>
                    </tr>

                    <tr>
                        <td>102</td>
                        <td>Freedge</td>
                        <td>55000</td>
                        <td>
                            <img src={freedge} height="100" width="150"/>
                        </td>
                        <td>
                            <button type="submit" onClick={handleBuyButton} name="btnfrg" >Buy</button>
                        </td>
                    </tr>

                    <tr>
                        <td>103</td>
                        <td>Washing Machine</td>
                        <td>25000</td>
                        <td>
                            <img src={wm} height="100" width="150"/>
                        </td>
                        <td>
                            <button type="submit" onClick={handleBuyButton} name="btnwn" >Buy</button>
                        </td>
                    </tr>

                    <tr>
                        <td>104</td>
                        <td>AC</td>
                        <td>125000</td>
                        <td>
                            <img src={ac} height="100" width="150"/>
                        </td>
                        <td>
                            <button type="submit" onClick={handleBuyButton} name="btnac" >Buy</button>
                        </td>
                    </tr>

                    <tr>
                        <td>105</td>
                        <td>Bellen</td>
                        <td>111</td>
                        <td>
                            <img src={bellan} height="100" width="150"/>
                        </td>
                        <td>
                            <button type="submit" onClick={handleBuyButton} name="btnbln" >Buy</button>
                        </td>
                    </tr>

                    <tr>
                        <td>106</td>
                        <td>Mixter</td>
                        <td>5500</td>
                        <td>
                            <img src={mixter} height="100" width="150"/>
                        </td>
                        <td>
                            <button type="submit" onClick={handleBuyButton} name="btnmix" >Buy</button>
                        </td>
                    </tr>

                </table>
            </center>
        </div>
    )

}export default ProductList ;
