import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center border-bottom'>
            <div className='row p-5'>
                <h1 className='fs-3 mt-3'>Technology</h1>
                <h3 className='text-muted mt-3 fs-5'>Sleek, modern and intuitive trading platforms</h3>
                <p className='mt-3'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;
