import React from "react";

import Nav from "../Components/NavBar";
import SearchHeader from "../Components/SearchHeader";

const Tools = ()=>{
    return (
        <div> 
        <Nav/>
                    <SearchHeader/>
                    <div className="belowNav">
                    </div>
        <h1> This is the Tools page</h1>
         </div>)
}


export default Tools;