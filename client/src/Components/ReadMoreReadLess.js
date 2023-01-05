import { useState } from "react";


const ReadMoreReadLess = ({limit, buttonText, children}) =>{
    const [isReadMoreShown, setReadMoreShown] = useState(false);

    const toggleBtn = ()=>{
        setReadMoreShown(prevState => !prevState);
}
    return(
        <div className="read-more-less">
        {isReadMoreShown ? children :children.substr(0, limit) + '...'}
        <button onClick={toggleBtn} className="read_more_less_button"> {buttonText}</button>
        </div>
        )
}

export default ReadMoreReadLess;