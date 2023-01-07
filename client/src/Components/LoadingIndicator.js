import React from 'react';



const LoadingIndicator = ()=>{
    return(
        <div> 
        <div className="realBody">
                    <div className="belowNav">
                    </div>
                    <div className="wrap">
                    <div className="loading-circle">
                    <div className="loading-circle__inner">
                        <div className="circle"><span className="line item"></span></div>
                        <p className="attention--en">Loading...</p>
                    </div>
                    </div>
                    </div>
        </div>
       
         </div>
    )
}

export default LoadingIndicator;