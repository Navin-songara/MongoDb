// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "../index.css"

// const CityMgt = () => {
//     const [ctid, setCtid] = useState("");
//     const [ctname, setCtName] = useState("");
//     const [stid, setStid] = useState("");
//     const [status, setStatus] = useState("");
//     const [ctlist, setCtList] = useState([]);
//     const [stlist, setStList] = useState([]);

//     let statename = "";

//     const handleCtidText = (e) => {
//         setCtid(e.target.value);
//     }

//     const handleCtName = (e) => {
//         setCtName(e.target.value);
//     }

//     const handleStidSelect = (e) => {
//         alert(e.target.value)
//         setStid(e.target.value);
//     }

//     const handleStatusText = (e) => {
//         setStatus(e.target.value);
//     }

//     useEffect(() => {
//         axios.get("http://localhost:9191/city/show")
//             .then((res) => {
//                 setStList(res.data);
//             }).catch((err) => {
//                 alert(err);
//             });
//     }, [])

//     const handleAddNewButton = () => {
//         axios.get("http://localhost:9191/city/getall")
//             .then((res) => {
//                 setCtid(res.data.length + 1);
//             }).catch((err) => { alert(err) });
//     }

//     const handleSaveButton = () => {
//         if (ctid === "" || ctid === undefined ||
//             ctname === "" || ctname === undefined ||
//             stid === "" || stid === undefined ||
//             status === "" || status === undefined ||
//             stid === "0") {
//             alert("Please Fill a Fileds");
//             return;
//         }
//         else {
//             axios.get("http://localhost:9191/city/searchbyname/" + ctname)
//                 .then((res) => {
//                     if (res.data.ctname !== undefined) {
//                         alert("City Name Already Exist");
//                     } else {
//                         let obj = {
//                             ctid: ctid,
//                             ctname: ctname,
//                             stid: stid,
//                             status: status
//                         }
//                         axios.post("http://localhost:9191/city/save", obj)
//                             .then((res) => {
//                                 alert(res.data)
//                                 setCtid("");
//                                 setCtName("");
//                                 setStid("");
//                                 setStatus("");
//                             }).catch((err) => {
//                                 alert(err);
//                             });
//                     }
//                 }).catch((err) => {
//                     alert(err);
//                 });
//         }
//     }

//     const handleShowButton = () => {
//         axios.get(`http://localhost:9191/city/show`)
//             .then((res) => {
//                 setCtList(res.data);
//             }).catch((err) => {
//                 alert(err);
//             });
//     }

//     const handleSearchButton = () => {
//         if (ctid !== undefined && ctid !== "") {
//             axios.get(`http://localhost:9191/city/search/${ctid}`)
//                 .then((res) => {
//                     if (res.data.stid !== undefined) {
//                         setCtid(res.data.ctid);
//                         setCtName(res.data.ctname);
//                         setStid(res.data.stid);
//                         setStatus(res.data.status);
//                     }
//                 }).catch((err) => {
//                     alert(err);
//                 });
//         }
//         if (ctname !== undefined && ctname !== "") {
//             axios.get(`http://localhost:9191/city/searchbyname/${ctname}`)
//                 .then((res) => {
//                     if (res.data.stid !== undefined) {
//                         setCtid(res.data.ctid);
//                         setCtName(res.data.ctname);
//                         setStid(res.data.stid);
//                         setStatus(res.data.status);
//                     } else {
//                         alert("Data Not Found");
//                     }
//                 }).catch((err) => {
//                     alert(err);
//                 });
//         }
//     }

//     const handleUpdateButton = () => {
//         if (
//             ctid === "" || ctid === undefined ||
//             ctname === "" || ctname === undefined ||
//             stid === "" || stid === undefined ||
//             status === "" || status === undefined) {
//             alert("Please Fill all fields");
//             return;
//         }
//         else {
//             let obj = {
//                 ctid: ctid,
//                 ctname: ctname,
//                 stid: stid,
//                 status: status
//             }
//             axios.put("http://localhost:9191/city/update", obj)
//                 .then((res) => {
//                     alert(res.data)
//                     setCtid("");
//                     setCtName("");
//                     setStid("");
//                     setStatus("");
//                 }).catch((err) => {
//                     alert(err);
//                 });
//         }
//     }

//     const handleDeleteButton = () => {
//         if (ctid !== undefined && ctid !== "") {
//             axios.delete("http://localhost:9191/city/delete/" + ctid)
//                 .then((res) => {
//                     alert(res.data);
//                 }).catch((err) => {
//                     alert(err);
//                 });
//         } else {
//             alert("Fill State id to Delete")
//         }
//     }

//     return (
//         <div>
//             <center>
//                 <h3>City Management</h3>
//                 <div className="myDiv">
//                     <center>
//                         <table>
//                             <tr>
//                                 <td>City Id</td>
//                                 <td>
//                                     <input type="number"
//                                         onChange={handleCtidText}
//                                         value={ctid}
//                                         className="form-control"
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>City Name</td>
//                                 <td>
//                                     <input type="text"
//                                         onChange={handleCtName}
//                                         value={ctname}
//                                         className="form-control"
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     State Name
//                                 </td>
//                                 <td>
//                                     <select onChange={handleStidSelect}
//                                         id="stdropdown"
//                                         name="stateddi"
//                                         className="form-control"
//                                     >
//                                         <option value="0" > Select State</option>
//                                         {
//                                             stlist.map((item) => (
//                                                 <option value={item.stid} key={item.stid}>{item.stname}</option>
//                                             ))
//                                         }
//                                     </select>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>Status</td>
//                                 <td>
//                                     <input type="text"
//                                         onChange={handleStatusText}
//                                         className="form-control"
//                                         value={status}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr></tr>
//                         </table>
//                         <table>
//                             <tr>
//                                 <td>
//                                     <button type="submit"
//                                         onClick={handleAddNewButton}
//                                         className="btn btn-primary"
//                                     >New</button>
//                                 </td>
//                                 <td>
//                                     <button type="submit"
//                                         onClick={handleSaveButton}
//                                         className="btn btn-success"
//                                     >Save</button>
//                                 </td>
//                                 <td>
//                                     <button type="submit"
//                                         onClick={handleShowButton}
//                                         className="btn btn-secondary"
//                                     >Show</button>
//                                 </td>
//                                 <td>
//                                     <button type="submit"
//                                         onClick={handleSearchButton}
//                                         className="btn btn-success"
//                                     >Search</button>
//                                 </td>
//                                 <td>
//                                     <button type="submit"
//                                         onClick={handleUpdateButton}
//                                         className="btn btn-primary"
//                                     >Update</button>
//                                 </td>
//                                 <td>
//                                     <button type="submit"
//                                         onClick={handleDeleteButton}
//                                         className="btn btn-danger"
//                                     >Delete</button>
//                                 </td>
//                             </tr>
//                         </table>
//                     </center>
//                 </div>
//                 <div className="myDiv2"></div>
//             </center>
//             <table>
//                 <tr>
//                     <th>City ID</th>
//                     <th>City Name</th>
//                     <th>State Name</th>
//                     <th>Status</th>
//                 </tr>
//                 {
//                     ctlist.map((item) => {
//                         return (
//                             <tr key={item.ctid}>
//                                 <td>{item.ctid}</td>
//                                 <td>{item.ctname}</td>
//                                 <td>{
//                                     stlist.map((stitem) => {
//                                         if (item.stid === stitem.stid) {
//                                             statename = stitem.stname;
//                                         }
//                                         return null;
//                                     })
//                                 }
//                                     {statename}
//                                 </td>
//                                 <td>
//                                     {item.status === 1 ? <h5>enabled</h5> : <h5>disabled</h5>}
//                                 </td>
//                             </tr>
//                         )
//                     })
//                 }
//             </table>
//         </div>
//     )
// }

// export default CityMgt;




import axios from "axios"; // API request bhejne ke liye axios import kiya
import React, { useEffect, useState } from "react"; // React and Hooks
import "../index.css" // CSS file import kiya styling ke liye

const CityMgt = () => {
    // State variables define kiye
    const [ctid, setCtid] = useState("");
    const [ctname, setCtName] = useState("");
    const [stid, setStid] = useState("");
    const [status, setStatus] = useState("");
    const [ctlist, setCtList] = useState([]); // City list
    const [stlist, setStList] = useState([]); // State list

    let statename = ""; // Temporary variable to store state name

    // Input field ke changes ko handle karne ke liye functions
    const handleCtidText = (e) => {
        setCtid(e.target.value);
    }

    const handleCtName = (e) => {
        setCtName(e.target.value);
    }

    const handleStidSelect = (e) => {
        alert(e.target.value); // Selected state ID alert karega
        setStid(e.target.value);
    }

    const handleStatusText = (e) => {
        setStatus(e.target.value);
    }

    // Component load hone par state list ko fetch karega
    useEffect(() => {
        axios.get("http://localhost:9191/city/show")
            .then((res) => {
                setStList(res.data); // State list ko set karega
            }).catch((err) => {
                alert(err);
            });
    }, []);

    // New button click par city ID auto generate hogi
    const handleAddNewButton = () => {
        axios.get("http://localhost:9191/city/getall")
            .then((res) => {
                setCtid(res.data.length + 1); // Total cities + 1 as new ID
            }).catch((err) => { alert(err) });
    }

    // City save karne ka function
    const handleSaveButton = () => {
        // Validation check
        if (ctid === "" || ctname === "" || stid === "" || status === "" || stid === "0") {
            alert("Please Fill a Fileds");
            return;
        } else {
            axios.get("http://localhost:9191/city/searchbyname/" + ctname)
                .then((res) => {
                    if (res.data.ctname !== undefined) {
                        alert("City Name Already Exist");
                    } else {
                        let obj = { ctid, ctname, stid, status };
                        axios.post("http://localhost:9191/city/save", obj)
                            .then((res) => {
                                alert(res.data);
                                // Clear fields after save
                                setCtid("");
                                setCtName("");
                                setStid("");
                                setStatus("");
                            }).catch((err) => {
                                alert(err);
                            });
                    }
                }).catch((err) => {
                    alert(err);
                });
        }
    }

    // City list ko dikhane ke liye
    const handleShowButton = () => {
        axios.get(`http://localhost:9191/city/show`)
            .then((res) => {
                setCtList(res.data);
            }).catch((err) => {
                alert(err);
            });
    }

    // City search by ID or Name
    const handleSearchButton = () => {
        if (ctid) {
            axios.get(`http://localhost:9191/city/search/${ctid}`)
                .then((res) => {
                    if (res.data.stid !== undefined) {
                        setCtid(res.data.ctid);
                        setCtName(res.data.ctname);
                        setStid(res.data.stid);
                        setStatus(res.data.status);
                    }
                }).catch((err) => alert(err));
        }
        if (ctname) {
            axios.get(`http://localhost:9191/city/searchbyname/${ctname}`)
                .then((res) => {
                    if (res.data.stid !== undefined) {
                        setCtid(res.data.ctid);
                        setCtName(res.data.ctname);
                        setStid(res.data.stid);
                        setStatus(res.data.status);
                    } else {
                        alert("Data Not Found");
                    }
                }).catch((err) => alert(err));
        }
    }

    // City update karne ka function
    const handleUpdateButton = () => {
        if (ctid === "" || ctname === "" || stid === "" || status === "") {
            alert("Please Fill all fields");
            return;
        } else {
            let obj = { ctid, ctname, stid, status };
            axios.put("http://localhost:9191/city/update", obj)
                .then((res) => {
                    alert(res.data);
                    setCtid("");
                    setCtName("");
                    setStid("");
                    setStatus("");
                }).catch((err) => {
                    alert(err);
                });
        }
    }

    // City delete karne ka function
    const handleDeleteButton = () => {
        if (ctid) {
            axios.delete("http://localhost:9191/city/delete/" + ctid)
                .then((res) => {
                    alert(res.data);
                }).catch((err) => alert(err));
        } else {
            alert("Fill State id to Delete");
        }
    }

    return (
        <div>
            <center>
                <h3>City Management</h3>
                <div className="myDiv">
                    <center>
                        <table>
                            <tr>
                                <td>City Id</td>
                                <td>
                                    <input type="number" onChange={handleCtidText} value={ctid} className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td>City Name</td>
                                <td>
                                    <input type="text" onChange={handleCtName} value={ctname} className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td>State Name</td>
                                <td>
                                    <select onChange={handleStidSelect} id="stdropdown" name="stateddi" className="form-control">
                                        <option value="0">Select State</option>
                                        {
                                            stlist.map((item) => (
                                                <option value={item.stid} key={item.stid}>{item.stname}</option>
                                            ))
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>
                                    <input type="text" onChange={handleStatusText} className="form-control" value={status} />
                                </td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td><button onClick={handleAddNewButton} className="btn btn-primary">New</button></td>
                                <td><button onClick={handleSaveButton} className="btn btn-success">Save</button></td>
                                <td><button onClick={handleShowButton} className="btn btn-secondary">Show</button></td>
                                <td><button onClick={handleSearchButton} className="btn btn-success">Search</button></td>
                                <td><button onClick={handleUpdateButton} className="btn btn-primary">Update</button></td>
                                <td><button onClick={handleDeleteButton} className="btn btn-danger">Delete</button></td>
                            </tr>
                        </table>
                    </center>
                </div>
            </center>

            {/* Cities ki list show hogi yahaan */}
            <table>
                <tr>
                    <th>City ID</th>
                    <th>City Name</th>
                    <th>State Name</th>
                    <th>Status</th>
                </tr>
                {
                    ctlist.map((item) => {
                        return (
                            <tr key={item.ctid}>
                                <td>{item.ctid}</td>
                                <td>{item.ctname}</td>
                                <td>{
                                    stlist.map((stitem) => {
                                        if (item.stid === stitem.stid) {
                                            statename = stitem.stname;
                                        }
                                        return null;
                                    })
                                }
                                    {statename}
                                </td>
                                <td>{item.status === 1 ? <h5>enabled</h5> : <h5>disabled</h5>}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default CityMgt; // Component export kar diya for use in app
