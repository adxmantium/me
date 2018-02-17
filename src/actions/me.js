// /actions/me.js

import * as actions from './../constants/me'

export const setActiveNavItem = activeNavItem => ({
	type: actions.SET_NAV_ITEM,
	payload: { activeNavItem }
})