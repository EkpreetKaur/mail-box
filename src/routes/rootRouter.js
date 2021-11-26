import React from 'react';
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { Router, Route, Switch } from "react-router-dom";
import Signup from "../pages/Signup";
import MailBox from "../pages/MailBox";

function rootRouter({ errors, auth, history }) {

    return (
            <Router history={history} >
                <Switch>
                    <Route path="/signup"  component={Signup} />
                    <Route path="/mails"  component={MailBox} />

                </Switch>
            </Router>

    );
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default withRouter(connect(mapStateToProps, {
})(rootRouter));
