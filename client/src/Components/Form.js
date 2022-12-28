import React from 'react';
import Input from "./Input";
import Label from '../Components/Label';
import Button from './Button';

const Form = ({list})=>{
    return(
        <form>
        {list.length > 0 && list.filter(it=>it!=='__v' && it !=='_id')
        .filter(it=>it !=='createdAt' && it!=='updatedAt')
        .map((it)=>{
            return (<div class="label_input">
                <Label id="label" label_name={it.replace(/[^a-zA-Z ]/g, " ")}/>

                <Input placeholder={it} className='form_input'/>
            </div>)
        })}
        <div className="submit_holder"> 
            {list.length > 0?<Button type="submit" name="Submit" className="submit_button"/>:<p></p>}
        </div>
        
    </form>
    );
}

export default Form;