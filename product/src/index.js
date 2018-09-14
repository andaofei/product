import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/home/index';
import './commom/js/three'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter>
        <div className="wrapper">
            {/*<Redirect to='/home'/>*/}
            <Switch>
                <Route path='/index' component={App}/>
                {/*<Route path='/test' component={TodoList}/>*/}
                <Redirect to='/index' />
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
registerServiceWorker();
