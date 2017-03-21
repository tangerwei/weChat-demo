'use strict';

import AppView from '../views/Appview';
import {Container} from 'flux/utils';
import TodoActions from '../data/TodoActions';
import ShowingStore from '../data/ShowingStore'

function getStores(){
    return[ShowingStore]
}

function getState(){
    return {
        showing:ShowingStore.getState(),

        onToggleIndex:TodoActions.toggleIndex,
    }
}

export default Container.createFunctional(AppView,getStores,getState);