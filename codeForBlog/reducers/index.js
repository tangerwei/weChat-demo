import { combineReducers } from 'redux'
import { CHANGETITLE } from '../actions'
const clicknav = (state = {
    navTag:"first"
}, action) => {
    switch (action.type) {
        case CHANGETITLE:
            console.log(action.navStr);
            return state;
        default: return state;
    }
}

const rootReducer = combineReducers({
    clicknav
})

export default rootReducer;