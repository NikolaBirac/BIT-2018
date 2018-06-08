import React from 'react';
import AuthorName from './AuthorName';
import MorePosts from './MorePosts';
import data from '../../services/dataServices';


class SinglePostPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null,
            user: null,
            userPosts: null
        }
    }

    componentWillReceiveProps(nextProps) {
        this.loadPage(nextProps.match.params.id);

    }
    componentDidMount() {
        this.loadPage(this.props.match.params.id);
    }

    loadPage(id) {
        data.getPost(id).then(post => {
            this.setState({
                post: post
            })
            data.getAuthor(post.userId).then(user => {
                this.setState({
                    user
                })
            })
            data.getAuthorPosts(post.userId, this.props.match.params.id).then(userPosts => {
                this.setState({
                    userPosts
                })
            })

        })
    }

    render() {
        return (
            (this.state.post) ?
                <div className="details">
                    <h2>{this.state.post.title}</h2>
                    {(this.state.user) ? <AuthorName user={this.state.user} /> : <div>Loading</div>}
                    <p className="detailsP">{this.state.post.body}</p>
                    {(this.state.userPosts) ? <MorePosts userPosts={this.state.userPosts} /> : <div>Loading</div>}
                </div> : <div>Loading</div>
        )
    }
}
export default SinglePostPage;