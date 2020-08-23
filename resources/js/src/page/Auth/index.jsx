import React from "react";
import { Route } from "react-router-dom";

import { LoginForm } from './login';
import { RegisterForm } from './register';



const Auth = () => (
    <section className="auth">
        <div className="auth__content">
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={RegisterForm} />
            {/*<Route exact path="/register/verify" component={CheckEmailInfo} />*/}
        </div>
    </section>
);

export default Auth;
