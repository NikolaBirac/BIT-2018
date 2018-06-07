import React from 'react';
import { Link } from 'react-router-dom';

const AuthorName = ()=>{
    return (
        <h3><Link to="/author/1">Ime Autora</Link></h3>
    )
}

export default AuthorName;