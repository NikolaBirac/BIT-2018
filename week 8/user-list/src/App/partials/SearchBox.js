import React from 'react';

class SearchBox extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            inputText: ""
        }
    }

    handleInput =(event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    render(){
        return (
            <div className="container" id='input'>
                <i class="glyphicon glyphicon-search"></i><input type='text' value={this.state.inputText} onChange={this.handleInput} placeholder="Search"/>
            </div>
        )
    }
}

export default SearchBox;