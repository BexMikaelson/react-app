import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/people" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>People</a>
                <a href ="/films">Films</a>
            </div>
        </nav>
     );
}
 
export default Navbar ;