import React from "react";
import Nav from "../Components/NavBar";
import SearchHeader from "../Components/SearchHeader";
import "../Admin.css";

import Table from '../Components/Table';
import TimeAndDate from "../Components/TimeAndDate";
import Quotes from "../Components/Quotes";


const Admin = ()=>{
    return (
    <div>
    <Nav/>
        <SearchHeader/>
        <div className="belowNav"> </div>
    <div className="realBody"> 
        <section className="section_one">
        <Quotes/>
        <TimeAndDate/>
        </section>
        <section>
        <Table/>
        </section>
        </div>
        <div className="belowNav"> </div>
        </div>);
}

export default Admin;

