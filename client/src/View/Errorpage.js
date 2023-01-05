import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../Components/NavBar";
import SearchHeader from "../Components/SearchHeader";

const CustomError = ({error})=>{
    const [errorState, setErrorState] = useState('');
    useEffect(()=>{
        axios.get('https://kofijunioreshun.onrender.com/*')
        .then(response=>setErrorState(response.data));
    }, [])

    return (
        <div> 
        <Nav/>
        <SearchHeader/>
        <div className="realBody">
                    <div className="belowNav">
                    </div>
        <div className="error_message">
            <h3> {error}</h3>
            <p> {errorState !== null &&errorState}</p>
        </div>
        </div>
       
         </div>)
   
}

export default CustomError;