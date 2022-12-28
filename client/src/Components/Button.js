import React from "react";

const Button = (props) =>{
    return <div>
    <button onClick={props.onCLick} type={props.type} className={props.className}>
    <a href={props.url}> {props.name}</a>
            </button>
            </div>
}
export default Button;