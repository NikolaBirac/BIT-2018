import React from 'react';
import AuthorInfo from './AuthorInfo';
import AuthorAddress from './AuthorAddress';
import AuthorCompany from './AuthorCompany';

const AuthorProfilePage =()=> {
    
    return (
        <div className="profile">
            <AuthorInfo/>
            <AuthorAddress/>
            <AuthorCompany/>            
        </div>
    )
}

export default AuthorProfilePage;