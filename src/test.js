import React from "react"
import ReactDOM from 'react-dom'
const RootEl2 = React.createClass({
    getInitialState() {
        return ({ key: 11 })
    },
    render() {
        return (<div>{this.state.key}</div>)
    }
});