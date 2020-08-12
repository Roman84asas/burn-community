import React from 'react';
import { Route } from 'react-router-dom'


import {Home, Forum} from './page'
import {Footer, Header} from './components'

function App() {
    return (
        <div className="main">
            <Header />
            <div className="content">
                <Route path='/' component={Home} exact/>
                <Route path='/forum' component={Forum} exact/>
            </div>
            <Footer />
        </div>
    );
}

export default App;
