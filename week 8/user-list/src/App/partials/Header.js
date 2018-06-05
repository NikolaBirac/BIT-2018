import React from 'react';
import logo from '../../logo.svg';


const Header = (props) => {
    return (
        < header className="App-header" >
            <img src={logo} className="App-logo" alt="logo" />
            <div className="container">
                <button onClick={props.handler}>
                {(props.display) ? <img className="icon" src="https://cdn2.iconfinder.com/data/icons/game-center-mixed-icons/512/list2.png"/> : <img className="icon" src="https://image.flaticon.com/icons/svg/56/56844.svg"/>}
                </button>
                <button onClick={props.refresh}><img className="icon" src="https://cdn0.iconfinder.com/data/icons/essentials-solid/100/Refresh-512.png"/></button>
            </div>
            <h1 className="App-title">BIT Users</h1>
        </header >
    )
}

export default Header;