import React from "react";

const Button = (props) =>{
    return <button type="button" className="crud_button">
                {props.name}
            </button>
}
export default Button;