import React from 'react';
import AuthorListItem from './AuthorListItem';

const AuthorsList = (props) => {
        return(
            <div>
                {props.authors.map(author=>{
                    return <AuthorListItem name={author.name}/>
                })}
            </div>
        )
}
export default AuthorsList;