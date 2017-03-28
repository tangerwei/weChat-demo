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
    if (props.showing.get("loginpageopen") == true) {
        return (<DataMes {...props} />)
    }
}
function DataMes(props) {
    return (<WattingDevelop />)
}
//等待开发
function WattingDevelop(){
    return (<div>等待开发</div>);
}
module.exports = LastPage;