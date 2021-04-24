import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import UserProvider from './providers/UserProvider';

import './index.css';
import {App, SignIn} from './components';
// import SignIn from './components/SignIn';



ReactDOM.render(
    <UserProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserProvider>,
    document.getElementById('root')
);


