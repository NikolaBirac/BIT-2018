import React from 'react';
import { Link } from 'react-router-dom';

const AuthorListItem =(props)=> {
    return (
        <div className="listItem authors">
            <p><Link to="/authors/1">{props.name}</Link></p>
        </div>
    )
}
export default AuthorListItem;