const AuthReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN': {
			return { currUser: action.payload }
		}
		case 'LOGOUT': {
			return { currUser: null }
		}
		default:
			return state
	}
}
export default AuthReducer
