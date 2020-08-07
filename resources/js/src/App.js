import React from 'react';
import { Route } from 'react-router-dom'


import {Home} from './page'
import {Header} from './components'

function App() {
    return (
        <div className="main">
            <Header />
            <div className="content">
                <Route path='/' component={Home}/>
            </div>
        </div>
    );
}

export default App;
