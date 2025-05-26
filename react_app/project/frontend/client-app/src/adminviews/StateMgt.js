// import React, { useState } from "react";
// import axios from "axios";
// import "../index";

// const StateMgt = () => {
//   const [stid, setStid] = useState(0);
//   const [stname, setStName] = useState("");
//   const [status, setStatus] = useState("");
//   const [stlist, setStList] = useState([]);

//   const handleStidText = (e) => {
//     setStid(e.target.value);
//   };

//   const handleStNameText = (e) => {
//     setStName(e.target.value);
//   };

//   const handleStatusText = (e) => {
//     setStatus(e.target.value);
//   };

//   const handleAddNewButton = () => {
//     axios
//       .get("http://localhost:9191/state/show")
//       .then((res) => {
//         setStid(res.data.length + 1);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   const handleSaveButton = () => {
//     if (!stid || !stname || !status) {
//       alert("Please Fill All Fields");
//       return;
//     }
//     axios
//       .post("http://localhost:9191/state/save", {
//         stid: stid,
//         stname: stname,
//         status: status
//       })
//       .then((res) => {
//         alert("State Saved");
//         setStid("");
//         setStName("");
//         setStatus("");
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   const handleShowButton = () => {
//     axios
//       .get("http://localhost:9191/state/show")
//       .then((res) => {
//         setStList(res.data);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   const handleSearchButton = () => {
//     if (stid) {
//       axios
//         .get(`http://localhost:9191/state/search/${stid}`)
//         .then((res) => {
//           if (res.data) {
//             setStid(res.data.stid);
//             setStName(res.data.stname);
//             setStatus(res.data.status);
//           } else {
//             alert("Data Not Found");
//           }
//         });
//     } else if (stname) {
//       axios
//         .get(`http://localhost:9191/state/searchbyname/${stname}`)
//         .then((res) => {
//           if (res.data) {
//             setStid(res.data.stid);
//             setStName(res.data.stname);
//             setStatus(res.data.status);
//           }
//         });
//     }
//   };

//   const handleUpdateButton = () => {
//     if (!stid || !stname || !status) {
//       alert("Please Fill all fields");
//       return;
//     }
//     axios
//       .put("http://localhost:9191/state/update", {
//         stid: stid,
//         stname: stname,
//         status: status
//       })
//       .then((res) => {
//         alert("State Updated");
//       });
//   };

//   const handleDeleteButton = () => {
//     if (stid) {
//       axios
//         .delete(`http://localhost:9191/state/delete/${stid}`)
//         .then((res) => {
//           alert("State Disabled");
//         });
//     }
//   };

//   return (
//     <div>
//       <center>
//         <h3>State Management</h3>
//         <div className="myDiv">
//           <table>
//             <tbody>
//               <tr>
//                 <td>State ID</td>
//                 <td>
//                   <input
//                     type="number"
//                     value={stid}
//                     onChange={handleStidText}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>State Name</td>
//                 <td>
//                   <input
//                     type="text"
//                     value={stname}
//                     onChange={handleStNameText}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Status</td>
//                 <td>
//                   <input
//                     type="number"
//                     value={status}
//                     onChange={handleStatusText}
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <table>
//             <tbody>
//               <tr>
//                 <td><button onClick={handleAddNewButton}>New</button></td>
//                 <td><button onClick={handleSaveButton}>Save</button></td>
//                 <td><button onClick={handleShowButton}>Show</button></td>
//                 <td><button onClick={handleSearchButton}>Search</button></td>
//                 <td><button onClick={handleUpdateButton}>Update</button></td>
//                 <td><button onClick={handleDeleteButton}>Delete</button></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="myDiv2">
//           <table>
//             <thead>
//               <tr>
//                 <th>State ID</th>
//                 <th>State Name</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {stlist.map((item) => (
//                 <tr key={item.stid}>
//                   <td>{item.stid}</td>
//                   <td>{item.stname}</td>
//                   <td>{item.status == 1 ? "Enabled" : "Disabled"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </center>
//     </div>
//   );
// };

// export default StateMgt;


import React, { useState } from "react";
import axios from "axios";
import "../index"; // assuming some styles are imported from here

const StateMgt = () => {
  // State variables banaye gaye hain
  const [stid, setStid] = useState(0); // state ID
  const [stname, setStName] = useState(""); // state name
  const [status, setStatus] = useState(""); // status (1 or 0)
  const [stlist, setStList] = useState([]); // state list for displaying table

  // Input ke change handlers
  const handleStidText = (e) => {
    setStid(e.target.value); // user se input ID le rahe hain
  };

  const handleStNameText = (e) => {
    setStName(e.target.value); // user se input name le rahe hain
  };

  const handleStatusText = (e) => {
    setStatus(e.target.value); // user se status (1/0) le rahe hain
  };

  // New Button: list fetch karke naya ID assign karte hain
  const handleAddNewButton = () => {
    axios
      .get("http://localhost:9191/state/show")
      .then((res) => {
        setStid(res.data.length + 1); // existing list ki length + 1
      })
      .catch((err) => {
        alert(err); // error alert
      });
  };

  // Save Button: new record save karta hai
  const handleSaveButton = () => {
    if (!stid || !stname || !status) {
      alert("Please Fill All Fields"); // agar koi bhi field empty hai
      return;
    }

    axios
      .post("http://localhost:9191/state/save", {
        stid: stid,
        stname: stname,
        status: status
      })
      .then(() => {
        alert("State Saved");
        setStid(""); // form clear kar rahe hain
        setStName("");
        setStatus("");
      })
      .catch((err) => {
        alert(err); // error alert
      });
  };

  // Show Button: sari states list me dikhata hai
  const handleShowButton = () => {
    axios
      .get("http://localhost:9191/state/show")
      .then((res) => {
        setStList(res.data); // response ko list me set karte hain
      })
      .catch((err) => {
        alert(err);
      });
  };

  // Search Button: ID ya name se search karta hai
  const handleSearchButton = () => {
    if (stid) {
      axios
        .get(`http://localhost:9191/state/search/${stid}`)
        .then((res) => {
          if (res.data) {
            // result mil gaya to data ko form me set karo
            setStid(res.data.stid);
            setStName(res.data.stname);
            setStatus(res.data.status);
          } else {
            alert("Data Not Found");
          }
        })
        .catch((err) => {
          alert("Error in ID search");
        });
    } else if (stname) {
      axios
        .get(`http://localhost:9191/state/searchbyname/${stname}`)
        .then((res) => {
          if (res.data) {
            setStid(res.data.stid);
            setStName(res.data.stname);
            setStatus(res.data.status);
          } else {
            alert("Data Not Found");
          }
        })
        .catch((err) => {
          alert("Error in Name search");
        });
    }
  };

  // Update Button: existing state data ko update karta hai
  const handleUpdateButton = () => {
    if (!stid || !stname || !status) {
      alert("Please Fill all fields");
      return;
    }

    axios
      .put("http://localhost:9191/state/update", {
        stid: stid,
        stname: stname,
        status: status
      })
      .then(() => {
        alert("State Updated");
      })
      .catch((err) => {
        alert("Update Failed");
      });
  };

  // Delete Button: record ko disable karta hai
  const handleDeleteButton = () => {
    if (stid) {
      axios
        .delete(`http://localhost:9191/state/delete/${stid}`)
        .then(() => {
          alert("State Disabled");
        })
        .catch((err) => {
          alert("Delete Failed");
        });
    }
  };

  return (
    <div>
      <center>
        <h3>State Management</h3>
        <div className="myDiv">
          {/* Form Inputs */}
          <table>
            <tbody>
              <tr>
                <td>State ID</td>
                <td>
                  <input
                    type="number"
                    value={stid}
                    onChange={handleStidText}
                  />
                </td>
              </tr>
              <tr>
                <td>State Name</td>
                <td>
                  <input
                    type="text"
                    value={stname}
                    onChange={handleStNameText}
                  />
                </td>
              </tr>
              <tr>
                <td>Status</td>
                <td>
                  <input
                    type="number"
                    value={status}
                    onChange={handleStatusText}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Buttons */}
          <table>
            <tbody>
              <tr>
                <td><button onClick={handleAddNewButton}>New</button></td>
                <td><button onClick={handleSaveButton}>Save</button></td>
                <td><button onClick={handleShowButton}>Show</button></td>
                <td><button onClick={handleSearchButton}>Search</button></td>
                <td><button onClick={handleUpdateButton}>Update</button></td>
                <td><button onClick={handleDeleteButton}>Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Display List */}
        <div className="myDiv2">
          <table>
            <thead>
              <tr>
                <th>State ID</th>
                <th>State Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {stlist.map((item) => (
                <tr key={item.stid}>
                  <td>{item.stid}</td>
                  <td>{item.stname}</td>
                  <td>{item.status === 1 ? "Enabled" : "Disabled"}</td> {/* === for strict comparison */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
};

export default StateMgt;
