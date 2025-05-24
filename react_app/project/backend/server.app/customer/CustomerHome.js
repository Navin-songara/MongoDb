// import React,{useEffect, useState} from "react";
// import ProductList from "../productiviews/ProductList";
// import BillByiD from "./BillByiD";
// import ReactDOM from "react-dom/client";
// import CustomerLogin from "./CustomerLogin";

// function CustomerHome(props)
// {
//     const[custname,setCustName]=useState();
//     const[isshosplist,setisShowPList]=useState(false);
//     const[isshosBill,setisShowBill]=useState(false);

//     useEffect(()=>{
//         var obj=JSON.parse(sessionStorage.getItem('sessionauth'));
//         if(obj!=undefined&&obj!=null)
//         {
//             //alert(obj.username);
//             setCustName(obj.userfullname);
//         }else{
//             alert('session expired');
//         }
//     })
//     const handleShopingButton=()=>{
//         const root=ReactDOM.createRoot(document.getElementById('root'));
//         alert("cid="+props.data.cid);
//         var cid=props.data.cid;
//         var cid=props.data.cid;
//         root.render(<ProductList data={cid}></ProductList>)
        
//     }
//     const handleShowBills=()=>{
//         const root=ReactDOM.createRoot(document.getElementById("root"));
//         var cid=props.data.cid;
//         root.render(<BillByiD data={cid}></BillByiD>);
//     }
//     const handleLogOut=()=>{
//         sessionStorage.removeItem('sessionauth');
//         alert("Customer Session Closed");
//         const root=ReactDOM.createRoot(document.getElementById("root"));

//         root.render(<CustomerLogin/>);
//     }

//     function togleShopping(){
//         setisShowPList((isshowplist)=>!isshowplist);
//     }
//     function togleBill(){
//         setisShowBill((isshosbill)=>!isshowbill);
//     }

//     return(
//         <div>
//             <p>Current Session Running For {custname}</p>
//             customer id{props.data.cid}
//             <h4 style={{backgroundColor:"yellow"}}>Customer Home Page</h4>
//             <h5>Welcome {props.data.cfname}</h5>
//             <img src={"http://localhost:9191/customer/getimage/"=props.data.cpicname} height={100} width={100} style={{borderRadius:50}}/>
//             <button type="submit" onClick={togleShopping} className="btn btn-success" style={{marginLeft:20}}>Shoping</button>

//             <button type="submit" onClick={togleBill} className="btn btn-primary" style={{marginLeft:20}}
//             onClick={handleLogOut}>Logout</button>
//             {/*bellow code to show hide product list component */}
//             {
//                 isshowplist &&
//                 <ProductList data={props.data.cid}/>
//             }

//             {/*bellow code to show hide bill component */}
//             {
//                 isshowbill &&
//                 <BillByiD data={props.data.cid}/>
//             }

//             <h4 style={backgroundColor:"yellow",fontSize:20}>
//                 <marque>www.abcdefghijklmnop</marque></h4>
//         </div>
//     );
// }export default CustomerHome;


import React, { useEffect, useState } from "react";
import ProductList from "../productiviews/ProductList";
import BillByiD from "./BillByiD";
import ReactDOM from "react-dom/client";
import CustomerLogin from "./CustomerLogin";

function CustomerHome(props) {
    const [custname, setCustName] = useState(); // Customer ka naam store karne ke liye state
    const [isshowplist, setisShowPList] = useState(false); // Shopping component dikhana hai ya nahi
    const [isshowbill, setisShowBill] = useState(false); // Bill component dikhana hai ya nahi

    useEffect(() => {
        var obj = JSON.parse(sessionStorage.getItem('sessionauth'));
        if (obj != undefined && obj != null) {
            // agar session data mila to naam set karo
            setCustName(obj.userfullname);
        } else {
            alert('session expired'); // session expire ho gaya
        }
    }, []); // ✅ useEffect me [] lagaya so ki ye sirf ek baar chale

    // Shopping button pe click karne pe product list component dikhana
    const handleShopingButton = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        alert("cid=" + props.data.cid);
        var cid = props.data.cid;
        root.render(<ProductList data={cid}></ProductList>);
    };

    // Bills show karne ke liye BillById component call karna
    const handleShowBills = () => {
        const root = ReactDOM.createRoot(document.getElementById("root"));
        var cid = props.data.cid;
        root.render(<BillByiD data={cid}></BillByiD>);
    };

    // Logout button pe click karne pe session remove karna aur login page pe redirect
    const handleLogOut = () => {
        sessionStorage.removeItem('sessionauth');
        alert("Customer Session Closed");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<CustomerLogin />);
    };

    // Toggle for shopping component
    function togleShopping() {
        setisShowPList((isshowplist) => !isshowplist);
    }

    // Toggle for bill component
    function togleBill() {
        setisShowBill((isshowbill) => !isshowbill);
    }

    return (
        <div>
            <p>Current Session Running For {custname}</p>
            customer id: {props.data.cid}
            <h4 style={{ backgroundColor: "yellow" }}>Customer Home Page</h4>
            <h5>Welcome {props.data.cfname}</h5>

            {/* ✅ Fixed image src syntax: "=" replaced with "+" */}
            <img
                src={"http://localhost:9191/customer/getimage/" + props.data.cpicname}
                height={100}
                width={100}
                style={{ borderRadius: 50 }}
                alt="Customer"
            />

            {/* ✅ Fixed double onClick on Logout button */}
            <button
                type="submit"
                onClick={togleShopping}
                className="btn btn-success"
                style={{ marginLeft: 20 }}
            >
                Shopping
            </button>

            <button
                type="submit"
                onClick={handleLogOut}
                className="btn btn-primary"
                style={{ marginLeft: 20 }}
            >
                Logout
            </button>

            {/* Niche wala code product list dikhane ke liye hai */}
            {isshowplist && <ProductList data={props.data.cid} />}

            {/* Niche wala code bill component dikhane ke liye hai */}
            {isshowbill && <BillByiD data={props.data.cid} />}

            {/* ✅ Fixed <marquee> spelling and style object syntax */}
            <h4 style={{ backgroundColor: "yellow", fontSize: 20 }}>
                <marquee>www.abcdefghijklmnop</marquee>
            </h4>
        </div>
    );
}

export default CustomerHome; // Component ko export kiya so ki dusre file me use ho sake
