const Copyright = (props) => {
    return (
        <footer>
            Copyright (c) by {props.name}
        </footer>
    )
}

const App = () => {
    return (
        <div>
            <h1>Luis Nazario de Lima Ronaldo</h1>
            <p>textextextextext</p>
            <img src='http://static.guim.co.uk/sys-images/Sport/Pix/columnists/2015/2/24/1424796317227/ronaldo-009.jpg' />
            <Copyright name='blokovi' />
        </div>
    )
}

const rootElement = document.getElementById('root');

ReactDOM.render(
    <App />,
    rootElement
)