'use strict';

import { Map } from 'immutable';
import { ReduceStore } from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import status from './initState'

class ShowingStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return Map(status);
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.TOGGLE_LIST_INDEX:
                return state.set("applistIndex", action.value);
            case TodoActionTypes.OPENLOGIN:
                return state.set("loginpageopen", true);
            case TodoActionTypes.CLOSELOGIN:
                return state.set("loginpageopen", false);
            default:
                return state;
        }
    }
}

export default new ShowingStore();