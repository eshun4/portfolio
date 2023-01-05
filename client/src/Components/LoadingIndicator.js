import React from 'react';



const LoadingIndicator = ()=>{
    return(
        <div> 
        <div className="realBody">
                    <div className="belowNav">
                    </div>
                    <div class="wrap">
                    <div class="loading-circle">
                    <div class="loading-circle__inner">
                        <div class="circle"><span class="line item"></span></div>
                        <p class="attention--en">Loading...</p>
                    </div>
                    </div>
                    </div>
        </div>
       
         </div>
    )
}

export default LoadingIndicator;