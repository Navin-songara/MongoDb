import React from "react";
import {Link,Route,Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import school from "./school.jpg";
function MainPage()
{
    return(
        <div>
            <center>
                <h4>Main Page</h4>
                <img src={school} height={200} width={1000} />
                <nav>
                    <Link to="home">Home</Link><span></span>
                    <Link to="about">About</Link><span></span>
                    <Link to="contact">Contact</Link><span></span>

                </nav>

                <Routes>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>

                </Routes>
            </center>
        </div>
    );
}export default MainPage;