import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Users from './Users';
import Wall from './Wall';
import WallPost from './WallPost';
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
             <Route
             exact
             path="/wall/:id"
             render= { props => (
               <Wall {...props}/>
             )}/>
             <Route
             exact
             path="/wall/:id/new"
             render= { props => (
               <WallPost {...props}/>
             )}/>
             </Switch>
            </div>
      </BrowserRouter>
  );
}

export default App;
