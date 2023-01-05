import React, {useEffect, useState} from "react";
// import Button from './Button';
import DropDown from "../Components/Dropdown";
import Form from "../Components/Form";
import {  FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import axios from "axios";
import Card from '../Components/Card';

const Table = ()=>{
    const [apiData, setApiData] = useState([]);
    const [endpoint, setEndPoint] = useState('');
    // const [keys, setKeys] = useState([]);
    // const [success, setSuccess] = useState('');
    const [selected, setSelected] = useState([])
     // eslint-disable-next-line
    const [input, setInput] = useState({});
    const [ident, setId] = useState('');
    const [buttonState, setButtonState] = useState('');
    // eslint-disable-next-line
    // const [error,setError]= useState('');
    // const [buttonState, setButtonState] = useState(false);
    
   

    const handleChange = (event)=>{
        setEndPoint(event.target.value);
    }

    // const closeSuccess = (className)=>{
    //     return document.querySelector(`${className}`).style.display = 'none';
    // }

    // const handleSuccess = ()=>{
    //     setSuccess(success);
    // }

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
        await axios.get(`https://kofijunioreshun.onrender.com/v1/portfolio/kofijnreshun/dev/admin_portfolio_panel/admin_kje/${endpoint}`,
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
        await axios.delete(`https://kofijunioreshun.onrender.com/${endpoint}/${id}`)
        .then((response)=> console.log(response.data));
        setApiData(apiData.filter(p=> p._id !== id));
        // document.querySelector('.error').style.display = 'flex';
    }

    const GetFormFromError = async()=>{
        setButtonState("add");
        await axios.post(`https://kofijunioreshun.onrender.com/${endpoint}`, myObject)
        .then((response)=> console.log(response.data)).catch((error)=> setSelected(Object.keys(error.response.data)));
        setButtonState("add")
        
    }

    const upDateData = async(ident)=>{
        await axios.put(`https://kofijunioreshun.onrender.com/${endpoint}/${ident}`, myObject)
        .then((response)=> console.log(response.data)).catch((error)=> console.log(error));
        // document.querySelector('.form_error').style.display = 'flex';
        fetchApi();
        setButtonState("update");
        
    }

    const HandleUpdate = (item)=>{
        setButtonState("update");
        setSelected(Object.keys(item));
        setId(item._id.toString());
    }
    

    const addData = async()=>{
        await axios.post(`https://kofijunioreshun.onrender.com/${endpoint}`, myObject)
        .then((response)=> console.log(response.data)).catch((error)=> console.log(error.response.data));
        fetchApi();
        setButtonState('');
        // document.querySelector("form").reset();
    }


    const onDelete = (item) => {
        deleteData(item._id)
    };

    const submitHandler = (buttonSt, id)=>
    {
        if(buttonSt==="add"){
            addData();
        }else{
            upDateData(id)
        }
        // switch(buttonSt){
        //     case "add":
        //         addData();
        //         break;
        //     case "update":
        //         upDateData(id)
        //         break
        //     default:
        //         console.log("You pressed this button");
        //         break
        // }
    }


    useEffect(()=>{
        fetchApi(); 
          // eslint-disable-next-line  
    }, [ endpoint])
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
    <div className="submit_button_div"> <FaPlus className="submit_button" onClick={()=>GetFormFromError()}/></div>
    <div className="forms">
    {selected.length <= 0?
    <h3 className="submit_button_div"> Select a Route and Press the Plus Button to Start</h3>
    :<Form list={selected} onHandleInput={onHandleInput} onPress={()=>submitHandler(buttonState,ident)} />}
    <div> 
    <Card/>   
    </div>
    </div>
    
 </div>);
}

export default Table;