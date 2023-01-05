import React, {useEffect, useState} from "react";
import axios from "axios";
import env from "../utilities/environments_configs";
const configuration = env.state.configurations;

const Quotes = ({quoteClass,authorClass, outerBoxClass, url_endpoint})=>{
    const [quote, setQuote]= useState([])
   
    
    const getQuoteData = async()=>{
        axios.get(`https://api.api-ninjas.com/v1/quotes?category=${url_endpoint}`, 
        {headers: { 'X-Api-Key': `${configuration.REACT_APP_API_NINJA_KEY}`},
        contentType: 'application/json'})
        .then((response)=> response.data)
        .then((data)=> setQuote(data))
    }
   
    useEffect(()=>{
        getQuoteData();
        // eslint-disable-next-line 
    }, [])

    return(<div className={outerBoxClass}>
    {
        quote.length > 0?
        <div >
        <p className={quoteClass}>{quote[0].quote}</p>
         <p className={authorClass}>~{quote[0].author}</p> 
         </div>:<p className={quoteClass}> Loading...</p>
         
    }
</div>)

}

export default Quotes;