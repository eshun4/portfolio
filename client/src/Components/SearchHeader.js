import React from "react";
import Input from "../Components/Input";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Button from '../Components/Button';
const SearchHeader = ()=>{
    return (<div className="searchHeader">
                <h3 className="navbox3">Kofi Junior Eshun</h3>
                <div className="navbox1"> <Input className="searchBar" placeholder="Search..."> </Input></div>
                <div className="navbox2"> 
                <Button url="http://localhost:5000/login" onClick={()=>console.log("clicked")} type='button'  name="Documentation" className="crud_button"/>
                <a href='https://www.facebook.com/profile.php?id=100082952230807' rel="noreferrer noopener" target="_blank"> <FaFacebook/></a>
                <a href='https://www.linkedin.com/in/kofi-eshun-a34441b3/' rel="noreferrer noopener" target="_blank"> <FaLinkedin/> </a>
                <a href='https://www.instagram.com/officialkofijnreshun/' rel="noreferrer noopener" target="_blank"> <FaInstagram/> </a>
                 </div>
            </div>
            );
}

export default SearchHeader;