import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import MyLists from './components/MyLists';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListItems from './components/ListItems';
import EditTitle from './components/EditTitle';
import EditItem from './components/EditItem';
import PrivacyPolicy from './components/PrivacyPolicy';
import LogOutPage from './components/LogOutPage';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/Login' component={LoginPage} />
          <Route exact path='/MyLists' component={MyLists} />
          <Route exact path='/ListItems' component={ListItems} />
          <Route exact path='/EditTitle' component={EditTitle} />
          <Route exact path='/EditItem' component={EditItem} />
          <Route exact path='/LogOut' component={LogOutPage} />
          <Route exact path='/PrivacyPolicy' component={PrivacyPolicy} />
          <Route exact Path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
