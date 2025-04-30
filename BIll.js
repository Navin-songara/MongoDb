import React from "react";
function Bill(props)
{
    var total=0;
    return(
        <div>
            <center>
                <h4 style={{backgroundColor:"green"}}>Bill</h4>
                <table border={1}>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Photo</th>
                    </tr>
                    {
                        props.data.map((item)=>(
                            <tr>
                                <td>[item.pid]</td>
                                <td>[item.pname]</td>
                                <td>[item.price]</td>
                                <img src={item.picname} height="50" width="50"/>                              

                            </tr>
                        )
                    )
                    }
                </table>
                {
                    props.data.map((item)=>{
                        total=total+item.price;
                    })
                }
                <h4 style={{backgroundColor:"green"}}>Total Amount={total}</h4>
            </center>
        </div>
    );
}export default Bill;