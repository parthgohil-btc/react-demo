import React, { Component } from 'react';
import { Input, Label, Button } from '../Ui/Index';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/action';

class Dashboard extends Component {
    render() {
        return ( 
            <div>Dashboard</div>
        )
    }
}

export default (Dashboard);