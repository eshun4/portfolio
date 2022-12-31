import React, {useEffect, useState} from "react";
import axios from "axios";
const Quotes = ()=>{
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
    }, [])

    return(<div className="section_one_box1" id='section_one_box1'>
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
</div>)

}

export default Quotes;