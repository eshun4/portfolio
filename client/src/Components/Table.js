import React, {useEffect, useState} from "react";
// import Button from './Button';
import DropDown from "../Components/Dropdown";
import Form from "../Components/Form";
import {  FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import {FaTimes, FaPlus } from "react-icons/fa";
import Card from '../Components/Card';

const Table = ()=>{
    const [apiData, setApiData] = useState([]);
    const [endpoint, setEndPoint] = useState('');
    // const [keys, setKeys] = useState([]);
    const [success, setSuccess] = useState({});
    const [selected, setSelected] = useState([])
     // eslint-disable-next-line
    const [input, setInput] = useState({});
    const [ident, setId] = useState('');
    const [error,setError]= useState('');
    const [buttonState, setButtonState] = useState(false);
    
   

    const handleChange = (event)=>{
        setEndPoint(event.target.value);
    }

    const closeSuccess = (className)=>{
        return document.querySelector(`${className}`).style.display = 'none';
    }

    const handleSuccess = ()=>{
        setSuccess({...success, success:success});
    }

    var inp = document.querySelectorAll('.form_input');
    const myObject = {}

    const formObject =  (data)=> data;
    const onHandleInput =(event)=> {
        formObject(myObject);
        setInput(event.target.value);
    };
   

   
    inp.forEach((it)=> myObject[`${it.name}`] = it.value);

    // const getKeys = ()=>apiData.map((item)=> setKeys((prevState)=>[...Object.keys(item)]));
    const filterFunc = ([key,val]) =>key !=='_id' && key !=='__v';

    const fetchApi = async(method)=>{
        await axios.get(`http://localhost:5000/v1/portfolio/kofijnreshun/dev/admin_portfolio_panel/admin_kje/${endpoint}`,
        {
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            }, 
          })
        .then((response)=> response.data)
        .then((data)=> setApiData(data))
    }
    const deleteData = async(id)=>{
        await axios.delete(`http://localhost:5000/${endpoint}/${id}`)
        .then((response)=> setSuccess(response.data));
        setApiData(apiData.filter(p=> p._id !== id));
        document.querySelector('.error').style.display = 'flex';
    }

    const HandleUpdate = (item)=>{
        setSelected(Object.keys(item));
        setId(item._id.toString());
    }

    const upDateData = async(ident)=>{
        await axios.put(`http://localhost:5000/${endpoint}/${ident}`, myObject)
        .then((response)=> setSuccess(response.data)).catch((error)=> setError(error.response.data));
        setButtonState(false);
        // fetchApi();
        document.querySelector('.form_error').style.display = 'flex';
    }

    const addData = async()=>{
        await axios.post(`http://localhost:5000/${endpoint}`, myObject)
        .then((response)=> setSuccess(response.data)).catch((error)=> setSelected(Object.keys(error.response.data)));
        // document.querySelector('.form_error').style.display = 'flex';
        fetchApi();
        document.querySelector("form").reset();
    }


    const onDelete = (item) => {
        deleteData(item._id)
    };

    const HandleAddData = ()=>{
        addData();
        setButtonState(true);
    }
    


    useEffect(()=>{
        fetchApi(); 
        // getKeys();   
        document.querySelector('.error').style.display = 'none';  
        document.querySelector('.form_error').style.display = 'none';    // eslint-disable-next-line  
          // eslint-disable-next-line  
    }, [ endpoint])
    return(
    <div>
        <section className="section_two">
    <div className="section_two_box1"> 
       <h3>Select Route: {endpoint}</h3>
    </div>
     <FaPlus className="add_button" onClick={()=>HandleAddData()}/>
    <div className="section_two_box2"> 
       <DropDown onChange={handleChange}/>
       <p onChange={handleSuccess} className="error"> {success.message} <FaTimes className="modal_button_error" onClick={()=>closeSuccess('.error')}/></p>
    </div> 
    </section>
    <div id="table_box">
    <table>
        { apiData.length > 0 && (
            apiData.map((data, index)=>{
                return (
            <tbody key={ index.toString()}>
            <tr className="table_rows" >
                {
                    Object.entries(data).filter(filterFunc).map(([key,val])=>{
                        return <th key={key._id}>{key.replace(/[^a-zA-Z ]/g, " ")}</th>
                    })
                }
                <th> Action</th>
            </tr>
            <tr className="table_rows">
                    {
                     Object.entries(data).filter(filterFunc).map(([key,val])=>{
                        return <td key={key._id}> {val}</td>
                     })   
                    }
                <td>
                <FaEdit className='resource_button_update' onClick={()=>HandleUpdate(data)}/> <FaTrash className='resource_button_del' onClick={()=>onDelete(data)}/>
                </td>
            </tr>
                    </tbody>
                    )
            })
        )}   
</table>
    </div>
    <div className='form_error'>{error} <FaTimes className="modal_button_error" onClick={()=>closeSuccess('.form_error')}/></div>
    <div className="forms">
    <Form list={selected} onHandleInput={onHandleInput} onPress={()=>buttonState === false ?upDateData(ident):addData()} />
    <div> 
    <Card/>   
    </div>
    </div>
    
 </div>);
}

export default Table;