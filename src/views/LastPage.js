import React from 'react';
function LastPage(props) {
    if (props.actions.get("loginState") == false) {
        return <LoginPage {...props} />;
    }
    if (props.actions.get("loginState") == true) {
        return (<DataMes {...props} />)
    }
}

function LoginPage(props) {
    if (props.showing.get("loginpageopen") == false) {
        return (<div className="loginBtn"><button onClick={props.onOpenLogin.bind(this, true)} type="button" className="btn btn-info">请登录</button></div>)
    }
    if (props.showing.get("loginpageopen") == true) {//登录界面
        return (<LoginPageD {...props} />)
    }
}
function DataMes(props) {
    return (<WattingDevelop />)
}
//等待开发
function WattingDevelop() {
    return (<div>等待开发</div>);
}

const LoginPageD = React.createClass({
    getInitialState() {
        return { userName: '', password: '' };
    },
    handleChange(key,e) {
        let obj = {};
        obj[key] = e.target.value
        let newstate = Object.assign({},this.state,obj);
        this.setState(newstate);
    },
    login(){
        this.props.onLogin(this.state);
    },
    render() {
        return (<div className='loginhold'>
            <input type='text' onChange={this.handleChange.bind(this, 'username')} className='form-control username' defaultValue ={this.state.userName}/>
            <input type='password' onChange={this.handleChange.bind(this, 'password')} className='form-control password' defaultValue ={this.state.password}/>
            <button onClick={this.login.bind(this,true)} type='button' className='self-login-btn btn btn-primary'>登录</button>
        </div>)
    }
});
module.exports = LastPage;