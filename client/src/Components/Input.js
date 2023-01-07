import React from "react";

const Input = (props)=>{
    return (
        <input  className={props.className} type="text" placeholder={props.placeholder} value={props.value} onChange={props.onChange} name={props.name} id={props.id} onClick={props.function}></input>
    );
}

export default Input;