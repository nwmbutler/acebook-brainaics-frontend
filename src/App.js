import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Users from './Users';
import './App.css';

function App() {
  return (
    <BrowserRouter>
       <div>
           <Switch>
           <Route
             exact
             path="/users"
             render= { props => (
               <Users {...props}/>
             )}/>
             </Switch>
            </div>
      </BrowserRouter>
  );
}

export default App;
