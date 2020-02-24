import { updateObject } from '../../shared/utility'

const initialState = {
	userId: '',
	token: '',
	authError: '',
	signupSuccess: '',
}

const reducer = (state = initialState, action) => {
	if(action.type === 'AUTHFAIL') {
		return updateObject(state, {authError: action.error});
	} else if(action.type === 'SIGNUPSUCCESS') {
		return updateObject(state, {signupSuccess: action.signupStatus});
	} else if(action.type === 'SETUSERID') {
		return updateObject(state, {userid: action.userId});
	}
	return state;
}

export default reducer;