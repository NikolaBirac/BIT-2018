import React from 'react';
import AuthorName from './AuthorName';
import MorePosts from './MorePosts'; 

class SinglePostPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="details">
                <h2>SINGLE POST TITLE</h2>
                <AuthorName/>
                <p className="detailsP">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <MorePosts />
            </div>
        )
    }
}
export default SinglePostPage;