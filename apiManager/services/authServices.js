import { authenticate } from "../../store/actions/AuthAction";
import API from '../endpoints/index';
import { httpGETRequest, httpPOSTRequest } from "../httpRequestHandler/index";
import { Alert } from 'react-native';

export const loginService = (email, password) => {
    return async (dispatch) => {
        await httpGETRequest({ ...API.AUTH_LOGIN, 'userid': email, 'pswd': password })
            .then((reply) => {
                let res = reply.data;
                if (res && res.status === "success") {
                    dispatch(authenticate(res.data));
                }
                else if (res && res.status === "error") {
                    throw new Error(res.error.message);
                }
            })
            .catch(error => {
                Alert.alert('', error.message, [{ text: 'OKAY' }]);
            });
    }
};

export const signupService = (email, password) => {
    return async dispatch => {
        await httpPOSTRequest({ ...API.AUTH_SIGNUP, 'userid': email, 'pswd': password })
            .then((reply) => {
                let res = reply.data;
                if (res && res.status === "success") {
                    dispatch(authenticate(res.data));
                }
                else if (res && res.status === "error") {
                    throw new Error(res.error.message);
                }
            })
            .catch(error => {
                Alert.alert('Error', error.message, [{ text: 'Okay' }]);
            });
    };
};