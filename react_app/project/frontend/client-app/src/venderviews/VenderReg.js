// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import VenderLogin from "./VenderLogin";
// import ReactDom from "react-dom/client";

// function VenderReg() {
//   const [vuserid, setVUserId] = useState();
//   const [vuserpass, setVUserPass] = useState();
//   const [vendername, setVenderName] = useState();
//   const [vaddress, setVAddress] = useState();
//   const [vcontact, setVContact] = useState();
//   const [vemail, setVEmail] = useState();
//   const [vpicname, setVPicName] = useState();
//   const [vid, setVId] = useState();
//   const [image, setImage] = useState({ preview: "", data: "" });
//   const [status, setStatus] = useState("");

//   const handleVUserIdText = (e) => {
//     setVUserId(e.target.value);
//   };
//   const handleVUserPassText = (e) => {
//     setVUserPass(e.target.value);
//   };
//   const handleVenderNameText = (e) => {
//     setVenderName(e.target.value);
//   };
//   const handleVAddressText = (e) => {
//     setVAddress(e.target.value);
//   };
//   const handleVContactText = (e) => {
//     setVContact(e.target.value);
//   };
//   const handleVEmailText = (e) => {
//     setVEmail(e.target.value);
//   };
//   const handleVidText = (e) => {
//     setVId(e.target.value);
//   };

//   useEffect(() => {
//     axios
//       .get("http://localhost:9191/vender/getvendercount")
//       .then((res) => {
//         setVId(res.data.length + 1);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   }, []);

//   const handleRegisterButton = () => {
//     let obj = {
//       VUserId: vuserid,
//       VUserPass: vuserpass,
//       VenderName: vendername,
//       VAddress: vaddress,
//       VContact: vcontact,
//       VEmail: vemail,
//       VPicName: vpicname,
//       Vid: vid,
//       Status: "Inactive",
//     };
//     axios
//       .post("http://localhost:9191/vender/register", obj)
//       .then((res) => {
//         alert(res.data);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   const handleSubmit = async (evt) => {
//     evt.preventDefault();
//     let formData = new FormData();
//     formData.append("file", image.data);
//     const response = await fetch(
//       "http://localhost:9191/vender/savevenderimage",
//       { method: "POST", body: formData }
//     );
//     if (response.ok) {
//       setStatus("File Uploaded Successfully");
//     } else {
//       setStatus("Failed to Upload File");
//     }
//   };

//   const handleFileChange = (evt) => {
//     const img = {
//       preview: URL.createObjectURL(evt.target.files[0]),
//       data: evt.target.files[0],
//     };
//     setImage(img);
//     setVPicName(evt.target.files[0].name);
//   };

//   const handleLogin = () => {
//     const root = ReactDom.createRoot(document.getElementById("root"));
//     root.render(<VenderLogin />);
//   };

//   return (
//     <div>
//       <center>
//         <p style={{ color: "blue" }}> Vender Registration Form</p>

//         <div
//           className="jumbotron"
//           style={{ marginLeft: 20, marginRight: 20, borderRadius: 5 }}
//         ></div>
//         <table>
//           <tbody>
//             <tr>
//               <td>Vender ID</td>
//               <td>{vid}</td>
//             </tr>
//             <tr>
//               <td>User ID</td>
//               <td>
//                 <input
//                   type="text"
//                   onChange={handleVUserIdText}
//                   className="form-control"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>Password</td>
//               <td>
//                 <input
//                   type="password"
//                   onChange={handleVUserPassText}
//                   className="form-control"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>Vender Name</td>
//               <td>
//                 <input
//                   type="text"
//                   onChange={handleVenderNameText}
//                   className="form-control"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>Address</td>
//               <td>
//                 <input
//                   type="text"
//                   onChange={handleVAddressText}
//                   className="form-control"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>Contact</td>
//               <td>
//                 <input
//                   type="number"
//                   maxLength={10}
//                   minLength={10}
//                   onChange={handleVContactText}
//                   className="form-control"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>Email</td>
//               <td>
//                 <input
//                   type="email"
//                   onChange={handleVEmailText}
//                   className="form-control"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>Select Photo</td>
//               <td>
//                 <input
//                   type="file"
//                   onChange={handleFileChange}
//                   name="file"
//                 />
//                 <img src={image.preview} width={100} height={100} alt="Preview" />
//               </td>
//             </tr>
//             <tr>
//               <td>Click To Upload Vender Photo</td>
//               <td>
//                 <button
//                   type="submit"
//                   onClick={handleSubmit}
//                   className="btn btn-danger"
//                 >
//                   Upload
//                 </button>
//                 {status && <p>{status}</p>}
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <button
//                   type="submit"
//                   onClick={handleRegisterButton}
//                   className="btn btn-primary"
//                 >
//                   Register
//                 </button>
//               </td>
//               <td>
//                 <button
//                   type="submit"
//                   onClick={handleLogin}
//                   className="btn btn-success"
//                 >
//                   Login
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </center>
//     </div>
//   );
// }

// export default VenderReg;   
import React, { useEffect, useState } from "react";
import axios from "axios";
import VenderLogin from "./VenderLogin";
import ReactDOM from "react-dom/client"; // ✅ Corrected casing (ReactDom → ReactDOM)

// Functional component for vendor registration
function VenderReg() {
  // Declaring all necessary states for form input fields
  const [vuserid, setVUserId] = useState("");
  const [vuserpass, setVUserPass] = useState("");
  const [vendername, setVenderName] = useState("");
  const [vaddress, setVAddress] = useState("");
  const [vcontact, setVContact] = useState("");
  const [vemail, setVEmail] = useState("");
  const [vpicname, setVPicName] = useState("");
  const [vid, setVId] = useState("");
  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");

  // Input field handlers to update state
  const handleVUserIdText = (e) => setVUserId(e.target.value);
  const handleVUserPassText = (e) => setVUserPass(e.target.value);
  const handleVenderNameText = (e) => setVenderName(e.target.value);
  const handleVAddressText = (e) => setVAddress(e.target.value);
  const handleVContactText = (e) => setVContact(e.target.value);
  const handleVEmailText = (e) => setVEmail(e.target.value);
  const handleVidText = (e) => setVId(e.target.value);

  // On component mount, get current vendor count and generate new ID
  useEffect(() => {
    axios
      .get("http://localhost:9191/vender/getvendercount")
      .then((res) => {
        setVId(res.data.length + 1); // Increment ID based on existing count
      })
      .catch((err) => {
        alert(err); // Alert on error
      });
  }, []);

  // When Register button is clicked, send data to backend
  const handleRegisterButton = () => {
    let obj = {
      VUserId: vuserid,
      VUserPass: vuserpass,
      VenderName: vendername,
      VAddress: vaddress,
      VContact: vcontact,
      VEmail: vemail,
      VPicName: vpicname,
      Vid: vid,
      Status: "Inactive", // Set default status as inactive
    };

    axios
      .post("http://localhost:9191/vender/register", obj)
      .then((res) => {
        alert(res.data); // Show success message
      })
      .catch((err) => {
        alert(err); // Show error message
      });
  };

  // Handles file upload (photo)
  const handleSubmit = async (evt) => {
    evt.preventDefault(); // Prevent page reload

    let formData = new FormData();
    formData.append("file", image.data); // Append image file to FormData

    const response = await fetch("http://localhost:9191/vender/savevenderimage", {
      method: "POST",
      body: formData,
    });

    // Check response and update status
    if (response.ok) {
      setStatus("File Uploaded Successfully");
    } else {
      setStatus("Failed to Upload File");
    }
  };

  // Handle file input change and preview image
  const handleFileChange = (evt) => {
    const img = {
      preview: URL.createObjectURL(evt.target.files[0]), // Create preview URL
      data: evt.target.files[0], // Save raw file data
    };
    setImage(img);
    setVPicName(evt.target.files[0].name); // Save file name
  };

  // Switch to login component
  const handleLogin = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<VenderLogin />);
  };

  // JSX layout returned by component
  return (
    <div>
      <center>
        <p style={{ color: "blue" }}>Vender Registration Form</p>

        <div
          className="jumbotron"
          style={{ marginLeft: 20, marginRight: 20, borderRadius: 5 }}
        >
          <table>
            <tbody>
              <tr>
                <td>Vender ID</td>
                <td>{vid}</td>
              </tr>
              <tr>
                <td>User ID</td>
                <td>
                  <input
                    type="text"
                    onChange={handleVUserIdText}
                    className="form-control"
                    value={vuserid}
                  />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input
                    type="password"
                    onChange={handleVUserPassText}
                    className="form-control"
                    value={vuserpass}
                  />
                </td>
              </tr>
              <tr>
                <td>Vender Name</td>
                <td>
                  <input
                    type="text"
                    onChange={handleVenderNameText}
                    className="form-control"
                    value={vendername}
                  />
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  <input
                    type="text"
                    onChange={handleVAddressText}
                    className="form-control"
                    value={vaddress}
                  />
                </td>
              </tr>
              <tr>
                <td>Contact</td>
                <td>
                  <input
                    type="text" // Changed from type="number" to allow length limit
                    maxLength={10}
                    minLength={10}
                    onChange={handleVContactText}
                    className="form-control"
                    value={vcontact}
                  />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="email"
                    onChange={handleVEmailText}
                    className="form-control"
                    value={vemail}
                  />
                </td>
              </tr>
              <tr>
                <td>Select Photo</td>
                <td>
                  <input type="file" onChange={handleFileChange} name="file" />
                  <img src={image.preview} width={100} height={100} alt="Preview" />
                </td>
              </tr>
              <tr>
                <td>Click To Upload Vender Photo</td>
                <td>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-danger"
                  >
                    Upload
                  </button>
                  {status && <p>{status}</p>} {/* Show upload status */}
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    type="submit"
                    onClick={handleRegisterButton}
                    className="btn btn-primary"
                  >
                    Register
                  </button>
                </td>
                <td>
                  <button
                    type="submit"
                    onClick={handleLogin}
                    className="btn btn-success"
                  >
                    Login
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
}

export default VenderReg; // ✅ Export the VenderReg component
