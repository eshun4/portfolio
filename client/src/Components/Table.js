import React, {useEffect, useState} from "react";
import Button from './Button';
import axios from "axios"
import DropDown from "../Components/Dropdown";
import Form from "../Components/Form";

const Table = ()=>{
    const [apiData, setApiData] = useState([]);
    const [endpoint, setEndPoint] = useState('');
    const [keys, setKeys] = useState([]);

    const handleChange = (event)=>{
        setEndPoint(event.target.value);
    }
    const getKeys = ()=>{
        apiData.map((item)=>{
            return setKeys([...Object.keys(item)]);
        })
    }
    useEffect(()=>{
        const getApiData = async()=>{
            axios.get(`http://localhost:5000/v1/portfolio/kofijnreshun/dev/admin_portfolio_panel/admin_kje/${endpoint}`)
            .then((response)=> response.data)
            .then((data)=> setApiData(data))
        }
        getApiData(); 
        getKeys();          // eslint-disable-next-line  
    }, [endpoint])
    return(
    <div>
        <section className="section_two">
    <div className="section_two_box1"> 
       <h3>Select Route: {endpoint}</h3>
    </div>
       <div className="section_two_box2"> 
       <DropDown onChange={handleChange}/>
    </div> 
    </section>
    <div id="table_box">
    <table>
        { apiData.length > 0 && (
            apiData.map((data)=>{
                return (
            <div>
            <tr className="table_rows">
                {
                    Object.keys(data).map((item)=>{
                        return <th>{item.replace(/[^a-zA-Z ]/g, " ")}</th>
                    })
                }
                <th> Action</th>
            </tr>
            <tr className="table_rows">
                    {
                     Object.values(data).map((item)=>{
                        return <td> {item}</td>
                     })   
                    }
                <td>
                 <Button name="DELETE" className="form_button"/> 
                <Button name="UPDATE" className="form_button_2"/>
                </td>
            </tr>
                    </div>
                    )
            })
        )}
            
</table>
    </div>
    <Form list={keys}/>
 </div>);
}

export default Table;