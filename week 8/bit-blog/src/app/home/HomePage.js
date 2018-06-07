import React from 'react';
import PostList from './PostList';
import data from '../../services/dataServices';

class Home extends React.Component {
    constructor(props){
        super(props)

        this.loadPost = this.loadPosts.bind(this);

        this.state = {
            posts: []
        }
    }

    loadPosts(){
        return data.getPosts().then(data => {
            this.setState({
                posts: data
            })
        })
    }
    componentDidMount(){
        this.loadPosts();
    }
    render (){
        return(
            <div>
                <h2> POSTS</h2>
                <PostList posts={this.state.posts}/>
            </div>
        )
    }
}
export default Home;