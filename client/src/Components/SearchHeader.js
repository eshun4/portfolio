import React, { useEffect, useState } from "react";
import Input from "../Components/Input";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Button from '../Components/Button';
import axios from "axios";
import env from "../utilities/environments_configs";
const configuration = env.state.configurations;
const SearchHeader = ()=>{
    const [response, setResponse] = useState({definition:'', valid:'', word:''});
    const [input, setInput] = useState('');
    const [bool, setBool] = useState(false);

    useEffect(()=>{
        if(input.length > 0){
            fetchWords();
        }else{
            setResponse({...response, definition:'Meaning', valid:'', word:'Word'})
        }
        // eslint-disable-next-line
    }, [input.length, response.definition, response.valid])


    const fetchWords = async()=>{
        axios.get(`https://api.api-ninjas.com/v1/dictionary?word=${input}`, 
        {headers: { 'X-Api-Key': `${configuration.REACT_APP_API_NINJA_KEY}`},
        contentType: 'application/json'})
        .then((response)=> response.data)
        .then((data)=> setResponse({...response, ...data}))
    }

    const useInput = (event) => {
        setInput(event.target.value);
    }
    // console.log(response)
    return (<div className="searchHeader">
                <h3 className="navbox3">Kofi Junior Eshun</h3>
                <div className="navbox1"> 
                <Input className="searchBar" onChange={useInput} placeholder="Search Word..." function={()=>setBool(!bool)}> </Input>
               {
                bool?<div className="dropList"> 
                <div></div>
                <div className="dropList_main">
                <h3>{response.word}</h3>
                <p> {response.definition}</p>
                </div>
                <div></div>
                </div>:<div></div>
               }
                </div>
                <div className="navbox2"> 
                <Button url="https://kofijunioreshun.onrender.com/api_documentation" onClick={()=>console.log("clicked")} type='button'  name="Documentation" className="crud_button"/>
                <a href='https://www.facebook.com/profile.php?id=100082952230807' rel="noreferrer noopener" target="_blank"> <FaFacebook/></a>
                <a href='https://www.linkedin.com/in/kofi-eshun-a34441b3/' rel="noreferrer noopener" target="_blank"> <FaLinkedin/> </a>
                <a href='https://www.instagram.com/officialkofijnreshun/' rel="noreferrer noopener" target="_blank"> <FaInstagram/> </a>
                 </div>
            </div>
            );
}

export default SearchHeader;