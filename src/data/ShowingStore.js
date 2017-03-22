'use strict';

import { Map } from 'immutable';
import { ReduceStore } from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

class ShowingStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return Map({ applistIndex: "0" });
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.TOGGLE_LIST_INDEX:
                return state.set("applistIndex", action.value);

            default:
                return state;
        }
    }
}

export default new ShowingStore();