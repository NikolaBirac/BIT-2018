import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (

        <nav className='row col-4 offset-5'>
            <div className='col'><Link className="nav-link" to='/'>Home</Link></div>
            <div className='col'><Link className="nav-link" to='/authors'>Authors</Link> </div>
            <div className='col'><Link className="nav-link" to='/about'>About</Link></div>
        </nav>

    )
}

export default Navigation;