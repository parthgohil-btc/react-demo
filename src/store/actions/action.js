import axios from 'axios';

export const signup = ( email, password, profileImage ) => {
    return dispatch => {
        const formData = new FormData();
        // formData.append("file1", event.target.files[0])
        formData.append("file1", profileImage);
        formData.append("email", email);
        formData.append("password", password);
        console.log(JSON.stringify(formData));
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        axios.post("http://localhost/reactapi/auth/signup", formData, config)
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