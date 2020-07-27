import React from 'react';
import '../App.css';

import { useSelector, useDispatch } from 'react-redux';
import { loggedIn, sendLoginData, sendListObject } from '../actions';

import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';

import { IoMdArrowRoundBack } from 'react-icons/io';
import MyLists from './MyLists';

import LoginPage from './LoginPage';

let LogOut = () => {
  const loginData = useSelector((state) => state.loginData);
  const logIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(loggedIn(false));
    dispatch(
      sendLoginData({
        email: '',
        token: '',
      })
    );

    dispatch(sendListObject([]));
  };
  return logIn ? (
    <BrowserRouter>
      <Switch>
        <Route path='/Login' exact component={LoginPage} />
        <Route path='/' exact component={MyLists} />
        <div className='logOutScreen'>
          <div className='NavigationBar'>
            <Link exact to='/' className='whiteIcon'>
              <IoMdArrowRoundBack className='backIcon' />
            </Link>
          </div>
          <div className='logOutText'> Signed in as </div>
          <div className='logOutText2'>{loginData.email}</div>

          <Link exact to='/Login' className='btnlogOut' onClick={logOut}>
            LOG OUT
          </Link>
        </div>
      </Switch>
    </BrowserRouter>
  ) : (
    <Redirect push to='/Login' />
  );
};
export default LogOut;
