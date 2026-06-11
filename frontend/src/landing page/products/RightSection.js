import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore,}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-5 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore} >Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div> 
                </div>
                <div className='col-7 mb-3'>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;