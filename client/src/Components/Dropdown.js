import React from "react";


const DropDown = ({endpoint, val,  onChanged})=>{
    return <select id="country" value={val} onChange={onChanged}>
    {endpoint.map((item, index)=>{
        return <option key={index} value={Object.values(item)}>{Object.keys(item)}</option>
    })}
    </select>
}

export default DropDown;