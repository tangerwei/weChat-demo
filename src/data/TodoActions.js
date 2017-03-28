'use strict'
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
    toggleIndex:function(value){
        TodoDispatcher.dispatch({
            type:TodoActionTypes.TOGGLE_LIST_INDEX,
            value
        });
    },
    login:function(username,password){
        TodoDispatcher.dispatch({
            type:TodoActionTypes.LOGIN,
            username,
            password
        });
    },
    openlogin:function(value){
        TodoDispatcher.dispatch({
            type:TodoActionTypes.OPENLOGIN,
            value
        });
    }
};
export default Actions;