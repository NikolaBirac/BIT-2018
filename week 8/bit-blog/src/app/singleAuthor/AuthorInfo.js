import React from 'react';

const AuthorInfo =(props)=>{

    return(
        <div className='row'>
            <div className='col-4'>
                <img id="icardi"src='https://www.thesportsman.com/media/images/admin/football/mauro_icardi.jpg' alt='image'/>
            </div>
            <div className='col-8'>
                <div className='row'>
                    <h2>Marko markovic</h2>
                </div>
                <div className='row'>
                    <p>username:</p>
                </div>
                <div className='row'>
                    <p>email:</p>                    
                </div>
                <div className='row'>
                    <p>company:</p>
                </div>
            </div>
        </div>
    )
}

export default AuthorInfo;