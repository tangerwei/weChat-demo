import React from "react"
import ReactDOM from 'react-dom'
var RootEl = React.createClass({
    getInitialState() {
        return ({ key: 10 })
    },
    render() {
        return (<div>{this.state.key}</div>)
    }
});
var index = {};
index.init = function () {
    ReactDOM.render(<RootEl />, document.getElementById("root"))
}
window.onload = function () {
    index.init();
}