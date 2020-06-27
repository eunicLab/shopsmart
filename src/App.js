import React from 'react';
import LoginPage from './components/LoginPage';
import MyLists from './components/MyLists';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListItems from './components/ListItems';
import EditTitle from './components/EditTitle';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/MyLists' component={MyLists} />
        <Route exact path='/ListItems' component={ListItems} />
        <Route exact path='/EditTitle' component={EditTitle} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
