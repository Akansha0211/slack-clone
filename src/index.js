import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import {App, SignIn} from './components';
// import SignIn from './components/SignIn';



ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>,
document.getElementById('root')
);


