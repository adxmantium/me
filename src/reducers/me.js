// reducers/me.js

import * as actions from './../constants/me'

const init = {
	activeNavItem: 'Me',
};

export default function(state = init, action) {

    switch(action.type) {

    	case actions.SET_NAV_ITEM:
    		return {...state, ...action.payload};

        default:
            return state;
            
    }

};