import React from 'react';
import AuthorsList from "./AuthorsList";
import data from '../../services/dataServices';

class Authors extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authors: []
        }
    }

    loadAuthors() {
        return data.getAuthors().then(authors => {
            this.setState({
                authors
            })
        })
    }

    componentDidMount() {
        this.loadAuthors();
    }

    render() {
        return (
            <div>
                <h2> AUTHORS ({this.state.authors.length})</h2>
                <AuthorsList authors={this.state.authors} />
            </div>
        )
    }
}
export default Authors;