import React from 'react';
import PostList from './PostList';

class Home extends React.Component {
    constructor(props){
        super(props)
    }

    render (){
        return(
            <div>
                <h2> POSTS</h2>
                <PostList />
            </div>
        )
    }
}
export default Home;