import React, {useEffect, useState} from "react";
import Nav from "../Components/NavBar";
import SearchHeader from "../Components/SearchHeader";
import "../Admin.css";
import axios from "axios";
import Table from '../Components/Table';
import TimeAndDate from "../Components/TimeAndDate";


const Admin = ()=>{
    
    const [quote, setQuote]= useState([])
   
    
    const getQuoteData = async()=>{
        axios.get(`https://api.api-ninjas.com/v1/quotes?category=inspirational`, 
        {headers: { 'X-Api-Key': 'MXDpgwM2IkDeQUB1VxebKg==Wg57rs0u3gO0U11a'},
        contentType: 'application/json'})
        .then((response)=> response.data)
        .then((data)=> setQuote(data))
    }
   
    
   
    useEffect(()=>{
        getQuoteData();
       
        // eslint-disable-next-line  
    }, [])

    return (
    <div>
    <Nav/>
        <SearchHeader/>
        <div className="belowNav"> </div>
    <div className="realBody"> 
        <section className="section_one">
    <div className="section_one_box1" id='section_one_box1'>
            {
                quote.length > 0?
                <div >
                <p className="quote">{quote[0].quote}</p>
                 <p className="author">~{quote[0].author}</p> 
                 </div>:
                 <div>
                 <p className="quote">If you accept the expectations of others, 
                 especially negative ones, 
                 then you never will change the outcome.</p>
                  <p className="author">~Michael Jordan</p>
                </div>
            }
        </div>
            <TimeAndDate/>
        </section>
        <section>
        <Table/>
        </section>
        </div>
        <div className="belowNav"> </div>
        </div>);
}

export default Admin;

