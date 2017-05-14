import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clickNav } from '../actions'

class App extends Component {
    componentDidMount() {
        console.log('component did mount');
    }
    componentWillReceiveProps(nextPorps) {
        console.log('component receive props');
    }
    handleClick(e) {
        clickNav("hello world");
        e.preventDefault();
    }
    render() {
        const { navTag } = this.props;
        console.log(this.props);
        return (<div onClick={this.handleChange}>{navTag}123</div>);
    }
}
const mapStateToProps = state => {
    const { navTag } = state
    return {
        navTag
    }
}
export default connect(mapStateToProps)(App)