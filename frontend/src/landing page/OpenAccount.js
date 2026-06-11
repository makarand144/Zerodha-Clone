import React from 'react';

function OpenAccount() {
    return ( 
         <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a Zerodha Account</h1>
                <p className='text-muted mt-2'>Modern platforms and apps, <i class="fa-solid fa-indian-rupee-sign" style={{fontSize: "85%"}}/>
                0 investments, and flat <i class="fa-solid fa-indian-rupee-sign" style={{fontSize: "85%"}}/>
                20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5 mt-2' style={{width:"15%", margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default OpenAccount;