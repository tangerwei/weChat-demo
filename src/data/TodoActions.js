'use strict'
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
    toggleIndex:function(value){
        console.log("action");
        TodoDispatcher.dispatch({
            type:TodoActionTypes.TOGGLE_LIST_INDEX,
            value
        });
    }
};
export default Actions;