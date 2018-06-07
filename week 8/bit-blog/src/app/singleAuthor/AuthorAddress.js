import React from 'react';

const AuthorAddress =()=>{

    return (

        <div className='row'>
            <div className="col-6 address">
                <div className="col-12">
                    <h2>Address</h2>
                </div>
                <div className="col-12">
                    <p>street:</p>
                </div>
                <div className="col-12">
                    <p>city:</p>
                </div>
                <div className="col-12">
                    <p>zipcode:</p>
                </div>
            </div>
            <div className="col-6">
                <iframe frameBorder="0" 
                    src="https://www.google.com/maps/embed/v1/place?q=40.7127837,-74.0059413&amp;key=AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk">
                </iframe>
            </div>
        </div>
    )
}

export default AuthorAddress;