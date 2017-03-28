'use strict';

import { Map } from 'immutable';
import { ReduceStore } from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

class ActionStore extends ReduceStore {
    constructor(){
        super(TodoDispatcher);
    }
    getInitialState() {
        return Map({ loginState: false });
    }
    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.LOGIN:
                return state.set("loginState", true);

            default:
                return state;
        }
    }
}
export default new ActionStore();