import React from 'react';
import {SignIn, Slack} from './';
import{Switch, Route} from 'react-router-dom';

// const PrivateRoute = (props) =>{
//   const {component:Component, isLoggedIn, ...others} = props;
//   return(
//     <Route
//       {...others}
//       render = {()={

//       }}
//     />;
//   )
// };

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={SignIn}/>
        <Route exact path="/signup" component={SignIn}/>
        <Route exact path="/" component={Slack}/>
      </Switch>
    </div>
  );
}

export default App;
