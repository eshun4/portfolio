import React from "react";
import { FaCalendarAlt, FaClock,} from "react-icons/fa";

const GreetingsQuotesAndCalender = ({list, date, time})=>{
    return <section className="greetings">
                <p className="greet"> Welcome</p>
                 <p className="name"> Kofi</p>
                 <p className="inBetween"> {list.map((item)=>{
                    return item["quote"] + ' ~ ' + item['author']
                 })}</p>
                 <div className="date"> <FaCalendarAlt/> {" "} {date} <p className="time"> <FaClock/> {" "} {time}</p></div>
            </section>
}

export default GreetingsQuotesAndCalender;