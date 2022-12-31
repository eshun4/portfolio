import React, {useEffect} from "react";
import Input from "./Input";
import Label from '../Components/Label';
import Button from './Button';

const Form = ({list,onHandleInput, onPress})=>{
    useEffect(()=>{
           // eslint-disable-next-line  
          // eslint-disable-next-line  
    }, [ list])

    return(
        <form>
        {list.length > 0 && list.filter(it=>it!=='__v' && it !=='_id')
        .filter(it=>it !=='createdAt' && it!=='updatedAt')
        .map((it, index)=>{
            return (<div className="label_input" key={index}>
                <Label id="label" label_name={it.replace(/[^a-zA-Z ]/g, " ")}/>
                <Input type='text' placeholder={it.replace(/[^a-zA-Z ]/g, " ")} onChange={onHandleInput} className='form_input' name={it}/> 
                <ul class="form_errors"> 
    {           <li> {`${it.replace(/[^a-zA-Z ]/g, " ")} is Required.`} </li> } 
                </ul>  
            </div>)
        })}
        
        <div className="submit_holder"> 
            {list.length > 0?<Button type="button" name="Submit" className="submit_button" onClick={onPress} displayName='Submit'/>:<p></p>}
        </div>
        
    </form>
    );
}

export default Form;