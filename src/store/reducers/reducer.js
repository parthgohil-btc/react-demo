const initialState = {
	userId: '',
	token: '',
	authError: '',
	signupSuccess: '',
}

const reducer = (state = initialState, action) => {
	if(action.type === 'AUTHFAIL') {
		const updateState = {};
		updateState['authError'] = action.error;
		return {
			...state,
			...updateState
		}
	} else if(action.type === 'SIGNUPSUCCESS') {
		const updateState = {};
		updateState['signupSuccess'] = action.signupStatus;
		return {
			...state,
			...updateState
		}
	} else if(action.type === 'SETUSERID') {
		const updateState = {};
		updateState['userid'] = action.userId;
		return {
			...state,
			...updateState
		}

	}
	return state;
}

export default reducer;