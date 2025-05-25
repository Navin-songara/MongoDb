// import React, { useEffect, useState } from "react";
// //import Product from "../productviews/Product";
// import ReactDOM from "react-dom/client";
// //import VenderLogin from "./VenderLogin";

// function VenderHome(props) {
//   const [vendname, setVendName] = useState("");

//   useEffect(() => {
//     let obj = JSON.parse(sessionStorage.getItem("vsessionauth"));
//     if (obj !== undefined && obj !== null) {
//       setVendName(obj.vserfullname);
//     } else {
//       alert("Vender Session Expired");
//     }
//   }, []); 

//   const handleAddProductButton = () => {
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(<Product data={props.data.vid} />);
//   };

//   const handleLogOut = () => {
//     sessionStorage.removeItem("vsessionauth");
//     alert("Vender Session Closed");
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(<VenderLogin />);
//   };

//   return (
//     <>
//       <p>Current Session Running For <b>{vendname}</b></p>
//       <h4 style={{ backgroundColor: "Yellow" }}>Vender Home Page</h4>
//       <h5>Vender ID: {props.data.vid}</h5>
//       <h5>Welcome {props.data.vfname}</h5>
//       <img
//         src={"http://localhost:9191/vender/getimages/" + props.data.vpicname}
//         height={100}
//         width={100}
//         alt="Vendor"
//       />
//       <br /><br />
//       <button
//         onClick={handleAddProductButton}
//         className="btn btn-primary"
//         style={{ marginRight: "10px" }}
//       >
//         Manage Product
//       </button>
//       <button
//         type="button"
//         className="btn btn-secondary"
//         onClick={handleLogOut}
//       >
//         Log Out
//       </button>
//     </>
//   );
// }

// export default VenderHome;


import React, { useEffect, useState } from "react";
// import Product from "../productviews/Product"; // Uncomment when using Product component
import ReactDOM from "react-dom/client";
// import VenderLogin from "./VenderLogin"; // Uncomment when using VenderLogin component

function VenderHome(props) {
  const [vendname, setVendName] = useState(""); // State to store vendor's name from session

  useEffect(() => {
    // This useEffect runs once when component mounts
    let obj = JSON.parse(sessionStorage.getItem("vsessionauth")); // Get session data from sessionStorage
    if (obj !== undefined && obj !== null) {
      setVendName(obj.vserfullname); // Set vendor name if session is valid
    } else {
      alert("Vender Session Expired"); // Alert if session not found
    }
  }, []);

  const handleAddProductButton = () => {
    // Renders the Product component (assumed to be dynamic)
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Product data={props.data.vid} />); // Pass vendor ID as prop
  };

  const handleLogOut = () => {
    // Clear session and redirect to login
    sessionStorage.removeItem("vsessionauth"); // Remove session item
    alert("Vender Session Closed"); // Alert user
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<VenderLogin />); // Load login component
  };

  return (
    <>
      <p>Current Session Running For <b>{vendname}</b></p>
      <h4 style={{ backgroundColor: "Yellow" }}>Vender Home Page</h4>
      <h5>Vender ID: {props.data.vid}</h5>
      <h5>Welcome {props.data.vfname}</h5>
      {/* Display vendor image */}
      <img
        src={"http://localhost:9191/vender/getimages/" + props.data.vpicname}
        height={100}
        width={100}
        alt="Vendor"
      />
      <br /><br />
      {/* Button to manage product */}
      <button
        onClick={handleAddProductButton}
        className="btn btn-primary"
        style={{ marginRight: "10px" }}
      >
        Manage Product
      </button>
      {/* Button to log out */}
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </>
  );
}

export default VenderHome; // Exporting component for use
