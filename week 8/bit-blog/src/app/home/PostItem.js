import React from 'react';
import { Link } from 'react-router-dom';

const PostItem =(props)=>{
    return(
        <div className="listItem">
            <h3><Link to="/details">{props.post.title}</Link></h3>
            <p>{props.post.body}</p>
        </div>
    )
}
export default PostItem;