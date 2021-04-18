import React from 'react';
import {SignIn, Slack} from './';
import{Switch, Route} from 'react-router-dom';

function Home(){
  return (
    <div>Home</div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/slack" component={Slack}/>
      </Switch>
    </div>
  );
}

export default App;
