import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../Components/NavBar";
import SearchHeader from "../Components/SearchHeader";
import env from "../utilities/environments_configs";
const configuration = env.state.configurations;

const CustomError = ({error})=>{
    const [errorState, setErrorState] = useState('');
    useEffect(()=>{
        axios.get(`${configuration.REACT_APP_BASE_URL}/*`)
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