import React from 'react';
import { Route } from 'react-router-dom'


import {Home, Forum, Category, Subcategory, Auth} from './page'
import {Footer, Header} from './components'

function App() {
    return (
        <div className="main">
            <Header />
            <div className="content">
                <Route path='/' component={Home} exact/>
                <Route path='/login' component={Auth} exact/>
                <Route path='/register' component={Auth} exact/>
                <Route path="/register/verify" component={Auth} exact/>
                <Route path='/forum' component={Forum} exact/>
                <Route path='/category' component={Category} exact/>
                <Route path='/category/subcategory' component={Subcategory} exact/>
            </div>
            <Footer />
        </div>
    );
}

export default App;
