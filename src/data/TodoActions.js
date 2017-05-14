'use strict'
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
    toggleIndex: function (value) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.TOGGLE_LIST_INDEX,
            value
        });
    },
    login: function (obj) {
        let username = obj.username;
        let password = obj.password;
        login(username, password, function (value) {
            TodoDispatcher.dispatch({
                type: TodoActionTypes.LOGIN,
                value
            });
        });
    },
    openlogin: function (value) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.OPENLOGIN,
            value
        });
    },
    closelogin:function(value){
        TodoDispatcher.dispatch({
            type: TodoActionTypes.CLOSELOGIN,
            value
        });
    }
};
function login(username, password, callback) {
    let xhr = new XMLHttpRequest();
    let url = 'http://localhost:8080/login';
    xhr.open('PUT', url, true);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let result = JSON.parse(xhr.responseText);
                if(result.exist && result.exist === true){
                    //登录成功。将用户登录状态存入缓存
                    //sessionStorage.setItem(key, JSON.stringify(value));
                    //打开详细信息界面
                    callback(true);
                }else{
                    callback(false);
                }
            } else {
                console.log('login fail');
            }
        }
    }
    let data = {
        username,
        password
    }
    xhr.send(JSON.stringify(data));
}
export default Actions;