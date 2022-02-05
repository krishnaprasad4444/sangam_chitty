import AuthConstants from '../constants/AuthConstants';

const initialState = { token: null, userId: null };

export default AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthConstants.AUTHENTICATE:
            return { token: action.token, userId: action.userId };
        case AuthConstants.LOGOUT:
            return initialState;
        case AuthConstants.REGISTER:
            return { token: action.token, userId: action.userId };
        default:
            return state;
    }
};
