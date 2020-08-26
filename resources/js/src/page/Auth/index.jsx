import React from "react";
import { Route } from "react-router-dom";

import { LoginForm } from './login';
import { RegisterForm } from './register';
import Verify from "./verify/";




const Auth = () => (
    <section className="auth">
        <div className="auth__content">
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/verify" component={Verify} />
        </div>
    </section>
);

export default Auth;
