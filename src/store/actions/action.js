import axios from 'axios';

export const signup = ( email, password ) => {
    return dispatch => {
        const authData = {
            email: email,
            password: password
        }
        axios.post("http://localhost/reactapi/auth/signup", authData)
            .then(response => {
                if(response.data.success) {
                    dispatch(signupsuccess(true));
                } else {
                    dispatch(authFail("Signup failed."));
                    // dispatch(authFail("Signup failed."));
                }
            })
            .catch(err => {

            });
    }
};

export const signupsuccess = (signupStatus) => {
    return {
        type: "SIGNUPSUCCESS",
        signupStatus: signupStatus
    };
}

export const authFail = ( res ) => {
    return {
        type: "AUTHFAIL",
        error: res
    };
}

export const login = ( email, password ) => {
    return dispatch => {
        const authData = {
            email: email,
            password: password
        }
        axios.post("http://localhost/reactapi/auth/login", authData)
            .then(response => {
                if(response.data.success) {
                    // dispatch(loginsuccess(true));
                    dispatch(userId(response.data.userid));
                } else {
                    dispatch(authFail("Login failed."));
                }
            })
            .catch(err => {

            });
    }
};

export const userId = ( userId ) => {
    return {
        type: "SETUSERID",
        userId: userId
    };
}