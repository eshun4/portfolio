import React from "react";
import Input from "../Components/Input";

const SearchHeader = ()=>{
    return (<div className="searchHeader">
                <h3 className="navbox3">Kofi Junior Eshun</h3>
                <div className="navbox1"> <Input className="searchBar" placeholder="Search..."> </Input></div>
                <div className="navbox2"> <a  href="http://localhost:5000/login"> Documentation </a>  </div>
            </div>
            );
}

export default SearchHeader;