import { combineReducers } from 'redux'
import { CHANGETITLE } from '../actions'
const clicknavRe = (state, action) => {
    switch (action.type) {
        case CHANGETITLE:
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    clicknavRe
})

export default rootReducer;