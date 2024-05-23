import React, { useState } from 'react';
import '../App.css';
import { Field, reduxForm } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import {
  handleTopSignUpButton,
  handleTopLoginButton,
  loggedIn,
  noLoginPageDisplay,
  errorSignUpFailed,
  errorLoginFailed,
  errorFieldEmpty,
  errorPrivacyPolicy,
  noError,
  sendLoginData,
  sendListObject,
  sendId,
  displayLoadingImage,
  noDisplayLoadingImage,
} from '../actions';
import axios from 'axios';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import Loading from './Loading.js';
import PrivacyPolicy from './PrivacyPolicy';
import MyCheck from './MyCheck';
import { IoMdArrowRoundBack } from 'react-icons/io';
import MyLists from './MyLists';
import ListItems from './ListItems';
import Home from './Home';

let LoginForm = (props) => {
  const signUpTop = useSelector((state) => state.signUpTop);
  const loginTop = useSelector((state) => state.loginTop);
  const firstName = useSelector((state) => state.firstName);
  const createBtn = useSelector((state) => state.createBtn);
  const logIn = useSelector((state) => state.loggedIn);
  const error = useSelector((state) => state.error);
  const loadingImage = useSelector((state) => state.loadingImage);
  const [toggleCheckBox, setValueCheckbox] = useState(false);
  const dispatch = useDispatch();

  let handleCheckboxTrue = () => {
    setValueCheckbox(true);
  };
  let handleCheckboxFalse = () => {
    setValueCheckbox(false);
  };

  const loginSubmit = (values) => {
    dispatch(displayLoadingImage());
    if (signUpTop === 'buttonTop') {
      if (values.email === undefined || values.password === undefined) {
        dispatch(errorFieldEmpty());
        dispatch(noDisplayLoadingImage());
      } else {
        axios
          .post('https://ishopsmartbackend.azurewebsites.net/api/auth/login', {
            email: values.email.toLowerCase(),
            password: values.password,
          })
          .then(
            (response) => {
              dispatch(loggedIn(true));
              dispatch(noError());
              dispatch(noDisplayLoadingImage());
              dispatch(noLoginPageDisplay());
              dispatch(
                sendLoginData({
                  email: values.email.toLowerCase(),
                  token: response.data.token,
                })
              );

              var api = 'https://ishopsmartbackend.azurewebsites.net/api/stuff';
              axios
                .get(api, {
                  params: {
                    email: values.email.toLowerCase(),
                  },
                  headers: { Authorization: `Bearer ${response.data.token}` },
                })
                .then((response) => {
                  dispatch(sendListObject(response.data[0].listObject));
                  dispatch(sendId(response.data[0]._id));
                });
            },
            (error) => {
              console.log('couldn not login');
              dispatch(errorLoginFailed());
              dispatch(noDisplayLoadingImage());
            }
          );
      }
    }
    if (signUpTop === 'buttonTopActive') {
      var api2 = 'https://ishopsmartbackend.azurewebsites.net/api/stuff';

      var api1 = 'https://ishopsmartbackend.azurewebsites.net/api/auth/signup';
      if (
        values.email === undefined ||
        values.password === undefined ||
        values.firstName === undefined
      ) {
        dispatch(errorFieldEmpty());
        dispatch(noDisplayLoadingImage());
      } else if (toggleCheckBox === false) {
        dispatch(errorPrivacyPolicy());
        dispatch(noDisplayLoadingImage());
      } else {
        var firstPost = {
          id: '',
          listObject: [],
          email: values.email.toLowerCase(),
          username: values.firstName,
        };

        axios
          .post(api1, {
            email: values.email.toLowerCase(),
            password: values.password,
          })
          .then(
            (response) => {
              axios
                .post('https://ishopsmartbackend.azurewebsites.net/api/auth/login', {
                  email: values.email.toLowerCase(),
                  password: values.password,
                })
                .then((response) => {
                  dispatch(loggedIn(true));
                  dispatch(noError());
                  dispatch(noDisplayLoadingImage());
                  dispatch(noLoginPageDisplay());
                  dispatch(
                    sendLoginData({
                      email: values.email,
                      token: response.data.token,
                    })
                  );
                  axios.post(api2, firstPost, {
                    headers: {
                      Authorization: `Bearer ${response.data.token}`,
                    },
                  });
                });
            },
            (error) => {
              console.log('couldn not login');
              dispatch(errorSignUpFailed());
              dispatch(noDisplayLoadingImage());
            }
          );
      }
    }
  };
  const { handleSubmit } = props;
  return !logIn ? (
    <BrowserRouter>
      <Switch>
        <Route path='/PrivacyPolicy' exact component={PrivacyPolicy} />
        <Route path='/MyLists' exact component={MyLists} />
        <Route path='/' exact component={Home} />
        <Route exact path='/ListItems' component={ListItems} />
        <div>
          {/*<div className='NavigationBar'>
            <Link exact to='/' className='whiteIcon'>
              <IoMdArrowRoundBack className='backIcon' />
            </Link>
  </div>*/}
          <div className='fullBackground'>
            <form
              onSubmit={handleSubmit(loginSubmit)}
              className='loginPageForm'>
              <span className={loadingImage}>
                <Loading />
              </span>
              <button
                className={signUpTop}
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(handleTopSignUpButton());
                  dispatch(noError());
                }}>
                Sign Up
              </button>
              <button
                className={loginTop}
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(handleTopLoginButton());
                  dispatch(noError());
                }}>
                Log in
              </button>
              <p className='error'>{error}</p>
              <div>
                <Field
                  name='firstName'
                  component='input'
                  type='text'
                  placeholder='First Name'
                  className={firstName}
                />
              </div>
              <div>
                <Field
                  name='email'
                  component='input'
                  type='text'
                  placeholder='Email'
                  className='email'
                />
              </div>
              <div>
                <Field
                  name='password'
                  component='input'
                  type='password'
                  placeholder='password'
                  className='password'
                />
              </div>
              <p
                className={
                  signUpTop === 'buttonTopActive' ? 'privacyLine' : 'noDisplay'
                }>
                <MyCheck
                  handleCheckboxFalse={handleCheckboxFalse}
                  handleCheckboxTrue={handleCheckboxTrue}
                  toggleCheckBox={toggleCheckBox}
                />
                <span>
                  I acknowledge that I have read and agree to the{' '}
                  <Link exact to='/PrivacyPolicy'>
                    {' '}
                    Privacy Policy
                  </Link>
                </span>
              </p>

              <button className='btnlogin' type='submit'>
                {createBtn}
              </button>
            </form>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  ) : (
    <Redirect push to='/MyLists' />
  );
};

LoginForm = reduxForm({
  form: 'loginAndSignUp',
})(LoginForm);

export default LoginForm;
