import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clicknav } from '../actions'

class App extends Component {
    componentDidMount() {
        console.log('component did mount');
    }
    componentWillReceiveProps(nextPorps) {
        console.log('component receive props');
    }
    handleClick() {
        this.props.dispatch(clicknav("helkk"));
    }
    render() {
        const { navTag } = this.props;
        return (<div onClick = {this.handleClick.bind(this)}>{navTag}123</div>);
    }
}
const mapStateToProps = state => {
    const { navTag } = state;
    return {
        navTag
    }
}
export default connect(mapStateToProps)(App)