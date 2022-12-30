import React from "react";

const Button = (props) =>{
    return <div>
    <button onClick={props.onClick} type={props.type} className={props.className} name={props.displayName}>
    <a href={props.url}> {props.name}</a>
            </button>
            </div>
}
export default Button;