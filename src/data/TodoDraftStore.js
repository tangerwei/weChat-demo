'use strict';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

class TodoDraftStore extends ReduceStore{
    constructor(){
        super(TodoDispatcher);
    }
}