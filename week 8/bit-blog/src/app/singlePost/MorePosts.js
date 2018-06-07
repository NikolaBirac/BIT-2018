import React from 'react';
import { Link } from 'react-router-dom';


const MorePost =()=>{
    return (
        <div>
            <h4>3 more posts from same author</h4>
            <p><Link to='/details'>Title 10</Link></p>
            <p><Link to='/details'>Title 11</Link></p>
            <p><Link to='/details'>Title 12</Link></p>
        </div>
    )
}

export default MorePost;