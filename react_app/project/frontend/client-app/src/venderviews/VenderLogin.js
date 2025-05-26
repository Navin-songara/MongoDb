// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import VenderHome from "./VenderHome";
// import ReactDOM from "react-dom/client";
// import Cookies from "js-cookie";
// import VenderReg from "./VenderReg";

// const VenderLogin = () => {
//   const [uid, setUId] = useState("");
//   const [upass, setUPass] = useState("");
//   const [ischecked, setIsChecked] = useState(false);

//   const handleUIdText = (e) => {
//     setUId(e.target.value);
//   };

//   const handleUPassText = (e) => {
//     setUPass(e.target.value);
//   };

//   useEffect(() => {
//     const mycookies = Cookies.get("vauth");
//     if (mycookies !== undefined) {
//       const obj = JSON.parse(mycookies);
//       setUId(obj.username);
//       setUPass(obj.password);
//     }
//   }, []);

//   const handleLoginButton = () => {
//     const obj = {
//       vuid: uid,
//       vupass: upass,
//     };

//     axios.post("http://localhost:9191/vender/login", obj)
//       .then((res) => {
//         if (res.data && res.data.VUserId) {
//           if (res.data.Status === "Inactive") {
//             alert("User Not Active. Please Wait For Admin Activation.");
//             return;
//           }

//           if (ischecked) {
//             Cookies.set("vauth", JSON.stringify({
//               username: uid,
//               password: upass,
//             }), { expires: 7 });
//           }

//           sessionStorage.setItem("vsessionauth", JSON.stringify({
//             vserfullname: res.data.VenderName,
//           }));

//           const root = ReactDOM.createRoot(document.getElementById("root"));
//           root.render(
//             <VenderHome data={{
//               vfname: res.data.VenderName,
//               vpicname: res.data.VPicName,
//               vid: res.data.Vid,
//             }} />
//           );
//         } else {
//           alert("Invalid ID/Password");
//         }
//       })
//       .catch((err) => {
//         alert("Login Error: " + err.message);
//       });
//   };

//   const handleIsRemember = () => {
//     setIsChecked(!ischecked);
//   };

//   const handleRegister = () => {
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(<VenderReg />);
//   };

//   return (
//     <>
//       <center>
//         <h4 style={{ backgroundColor: "yellow" }}>Vender Login Form</h4>
//         <div
//           className="jumbotron"
//           style={{ marginLeft: 20, marginRight: 20, borderRadius: 5 }}
//         >
//           <table>
//             <tbody>
//               <tr>
//                 <td>User Id</td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     onChange={handleUIdText}
//                     value={uid}
//                     style={{ marginTop: 5 }}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Password</td>
//                 <td>
//                   <input
//                     type="password"
//                     onChange={handleUPassText}
//                     className="form-control"
//                     value={upass}
//                     style={{ marginTop: 5 }}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td>
//                   <input
//                     type="checkbox"
//                     onClick={handleIsRemember}
//                     checked={ischecked}
//                   />{" "}
//                   <span> Remember Me </span>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <button
//                     type="submit"
//                     className="btn btn-success"
//                     onClick={handleLoginButton}
//                     style={{ marginTop: 5, marginLeft: 30 }}
//                   >
//                     Login
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     type="submit"
//                     className="btn btn-success"
//                     onClick={handleRegister}
//                     style={{ marginTop: 5, marginLeft: 30 }}
//                   >
//                     Register
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </center>
//     </>
//   );
// };

// export default VenderLogin;   


import React, { useEffect, useState } from "react";
import axios from "axios";
import VenderHome from "./VenderHome";
import ReactDOM from "react-dom/client";
import Cookies from "js-cookie";
import VenderReg from "./VenderReg";

const VenderLogin = () => {
  // State to store user ID and password input values
  const [uid, setUId] = useState("");
  const [upass, setUPass] = useState("");
  const [ischecked, setIsChecked] = useState(false); // Checkbox state for "Remember Me"

  // Input field handlers
  const handleUIdText = (e) => {
    setUId(e.target.value);
  };

  const handleUPassText = (e) => {
    setUPass(e.target.value);
  };

  // useEffect: On component mount, check if cookie exists and pre-fill login fields
  useEffect(() => {
    const mycookies = Cookies.get("vauth");
    if (mycookies !== undefined) {
      const obj = JSON.parse(mycookies); // Parse cookie value
      setUId(obj.username);
      setUPass(obj.password);
    }
  }, []);

  // Handles login button click
  const handleLoginButton = () => {
    const obj = {
      vuid: uid,
      vupass: upass,
    };

    axios.post("http://localhost:9191/vender/login", obj)
      .then((res) => {
        if (res.data && res.data.VUserId) {
          if (res.data.Status === "Inactive") {
            alert("User Not Active. Please Wait For Admin Activation.");
            return;
          }

          // Save credentials in cookie if "Remember Me" is checked
          if (ischecked) {
            Cookies.set("vauth", JSON.stringify({
              username: uid,
              password: upass,
            }), { expires: 7 }); // Expires in 7 days
          }

          // Store user session data in sessionStorage
          sessionStorage.setItem("vsessionauth", JSON.stringify({
            vserfullname: res.data.VenderName,
          }));

          // Render VenderHome component with vendor data
          const root = ReactDOM.createRoot(document.getElementById("root"));
          root.render(
            <VenderHome data={{
              vfname: res.data.VenderName,
              vpicname: res.data.VPicName,
              vid: res.data.Vid,
            }} />
          );
        } else {
          alert("Invalid ID/Password");
        }
      })
      .catch((err) => {
        alert("Login Error: " + err.message); // Handle any login error
      });
  };

  // Handles checkbox toggle for "Remember Me"
  const handleIsRemember = () => {
    setIsChecked(!ischecked);
  };

  // Handles register button click and loads VenderReg component
  const handleRegister = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<VenderReg />);
  };

  return (
    <>
      <center>
        <h4 style={{ backgroundColor: "yellow" }}>Vender Login Form</h4>
        <div
          className="jumbotron"
          style={{ marginLeft: 20, marginRight: 20, borderRadius: 5 }}
        >
          <table>
            <tbody>
              <tr>
                <td>User Id</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleUIdText}
                    value={uid}
                    style={{ marginTop: 5 }}
                  />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input
                    type="password"
                    onChange={handleUPassText}
                    className="form-control"
                    value={upass}
                    style={{ marginTop: 5 }}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    type="checkbox"
                    onClick={handleIsRemember}
                    checked={ischecked}
                  />{" "}
                  <span> Remember Me </span>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={handleLoginButton}
                    style={{ marginTop: 5, marginLeft: 30 }}
                  >
                    Login
                  </button>
                </td>
                <td>
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={handleRegister}
                    style={{ marginTop: 5, marginLeft: 30 }}
                  >
                    Register
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    </>
  );
};

export default VenderLogin; // Exporting the VenderLogin component
