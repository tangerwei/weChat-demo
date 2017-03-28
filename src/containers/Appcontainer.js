'use strict';

import AppView from '../views/Appview';
import {Container} from 'flux/utils';
import TodoActions from '../data/TodoActions';
import ShowingStore from '../data/ShowingStore';
import ActionStore from '../data/ActionStore';

function getStores(){
    return[ShowingStore,ActionStore]
}

function getState(){
    return {
        showing:ShowingStore.getState(),
        actions:ActionStore.getState(),

        onToggleIndex:TodoActions.toggleIndex,
        onLogin:TodoActions.login,
        onOpenLogin:TodoActions.openlogin,
    }
}

export default Container.createFunctional(AppView,getStores,getState);