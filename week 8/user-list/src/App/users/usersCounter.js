import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
    }

    // counterGender() {
        const counter=12;
        // this.props.users.map(user => {
        //   if (user.gender === 'female') {
            // return counter++;
    //       }
    //     })
    //   }

    render() {
        return (
            <div>
                <p>
                  {this.counterGender.counter}
                </p>
            </div>
        )
    }

}

export default Counter;