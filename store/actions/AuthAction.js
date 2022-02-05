import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthConstants from '../constants/AuthConstants';

let timer;

export const authenticate = (data) => dispatch => {
    const userid = data[0].userid;
    const token = data[0].token;
    const expiry = data[0].expiry;
    const expiryTime = parseInt(expiry);

    dispatch(setLogoutTimer(expiryTime));
    dispatch({ type: AuthConstants.AUTHENTICATE, userId: userid, token: token });

    const expirationDate = new Date(new Date().getTime() + expiryTime);

    AsyncStorage.setItem(
        'userData', JSON.stringify({ token: token, userId: userid, expiryDate: expirationDate.toISOString() })
    );
};

export const logout = () => {
    clearLogoutTimer();
    AsyncStorage.removeItem('userData');
    return { type: AuthConstants.LOGOUT };
};

const clearLogoutTimer = () => {
    if (timer) clearTimeout(timer);
};

const setLogoutTimer = expirationTime => {
    return dispatch => {
        timer = setTimeout(() => {
            dispatch(logout());
        }, expirationTime);
    };
};