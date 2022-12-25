import React from "react";
import Button from '../Components/Button';


const Table = ({list, operations,secList })=>{
    return (<div class="new_grid">
    <div className="table_grid"> 
    <div className="table">
    <table>
    <tr>
    {secList.map((item, index)=>{
        return <th key={index}>{item}</th>
    }
    
    )} 
    <th >Action</th>
    </tr>
    {list.map((item)=>{
        return(<tr>
            <td>{item.school_name}</td>
            <td>{item.start_year}</td>
            <td>{item.end_year}</td>
            <td>{item.course}</td>
            <td>{item.accomplishments}</td>
            <td>{item.course_description}</td>
            <td>{item.talents.map((it, index)=>{
                return <tr key={index}><td> {it}</td></tr>
            })}</td>
            <td>{item.fav_subjects.map((it, index)=>{
                return <tr key={index}><td> {it}</td></tr>
            })}</td>
            <td>{item.school_clubs.map((it, index)=>{
                return<tr key={index}><td> {it}</td></tr>
            })}</td>
            <td>{item.graduated === true? "Graduated.":"Not Graduated."}</td>
            <td>{item.gpa}</td>
            <td>{new Date(item.createdAt).toUTCString()}</td>
            <td>{new Date(item.updatedAt).toUTCString()}</td>
            <td>{item? operations.map((it)=><Button name={it}/>
            ):"No Action"}</td>
        </tr>)
    })}
    </table>
    </div>
    </div>
    </div>);
}

export default Table;