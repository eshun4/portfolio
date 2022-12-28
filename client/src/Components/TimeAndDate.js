import React,{useEffect, useState} from "react";

const TimeAndDate = ()=>{
const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

    return(<div className="section_one_box2">
        <p> {date.toDateString()}</p>
        <h2> {date.toLocaleTimeString()}</h2> 
    </div>);
}

export default TimeAndDate;