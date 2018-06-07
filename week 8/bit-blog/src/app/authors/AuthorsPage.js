import React from 'react';
import AuthorsList from "./AuthorsList";

class Authors extends React.Component {
    constructor(props){
        super(props)
    }

    render (){
        return(
            <div>
                <h2> AUTHORS (6)</h2>
                <AuthorsList />
            </div>
        )
    }
}
export default Authors;