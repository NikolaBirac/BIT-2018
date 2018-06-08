import React from 'react';
import AuthorListItem from './AuthorListItem';

const AuthorsList = (props) => {
    return (
        <div>
            {props.authors.map(author => {
                return <AuthorListItem name={author.name} id={author.id} />
            })}
        </div>
    )
}
export default AuthorsList;