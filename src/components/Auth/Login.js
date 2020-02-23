import React, { Component } from 'react';
import { Input, Label, Button } from '../Ui/Index';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/action';

class Signin extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        if(this.props.signupSuccess) {
            this.props.unsetSignupSuccess()
        }
    }

    state = {
        email: '',
        password: '',
        errors: {},
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        if(this.handleValidation()) {
            this.props.userLogin(this.state.email, this.state.password)
        }
    }
    inputStateHandler = (e, key) => {
        const newInputStateVal = {}
        newInputStateVal[key] = e.target.value;
        this.setState(newInputStateVal);
    }

    handleValidation(){
        let errors = {};
        let formIsValid = true;

        //Email
        if(!this.state.email){
           formIsValid = false;
           errors["email"] = "Please enter email id.";
        }

        if(typeof this.state.email !== "undefined"){
           let lastAtPos = this.state.email.lastIndexOf('@');
           let lastDotPos = this.state.email.lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid.";
            }
       }

       //Password
       if(!this.state.password){
          formIsValid = false;
          errors["password"] = "Please enter password.";
       }

       this.setState({errors: errors});
       return formIsValid;
    }
    render() {
        let signupError = '';
        if(this.props.signupError) {
            signupError = <div class="alert alert-warning" role="alert">{ this.props.signupError }</div>
        }
        let errors = '';
        {
            if(Object.keys(this.state.errors).length !== 0) {
                errors = [
                    Object.keys(this.state.errors).map((keyName, index) => {
                        return this.state.errors[keyName];
                    })
                ]
                errors = <div class="alert alert-warning" role="alert">{ errors }</div>
            }
        }
        return ( 
            <div className="col-md-8 order-md-1">
                <h4 className="mb-3">Login</h4>
                {signupError}
                {errors}
                { (this.props.userid) ? <Redirect to='/dashboard' /> : '' } 
                <form onSubmit={this.formSubmitHandler}>
                    <div className="form-group">
                        <Label for="email">Email address</Label>
                        <Input type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" defaultValue={this.state.email} onChange={(event) => this.inputStateHandler(event, 'email')} />
                    </div>
                    <div className="form-group">
                        <Label for="password">Password</Label>
                        <Input type="password" className="form-control" id="password" placeholder="Password" defaultValue={this.state.password} onChange={(event) => this.inputStateHandler(event, 'password')} />
                    </div>
                    <Button type="submit" className="btn btn-primary">Submit</Button>
                    <Link to="/signup" className="form-text text-muted">Signup</Link>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        signupSuccess: state.myReducer.signupSuccess,
        userid: state.myReducer.userid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (email, password) => dispatch(actionCreators.login(email, password)),
        unsetSignupSuccess: () => dispatch(actionCreators.signupsuccess(false)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);