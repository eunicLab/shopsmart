import React from 'react';
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
  noError,
  sendLoginData,
  sendListObject,
  sendId,
  displayLoadingImage,
  noDisplayLoadingImage,
} from '../actions';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Loading from './Loading.js';

let LoginForm = (props) => {
  const signUpTop = useSelector((state) => state.signUpTop);
  const loginTop = useSelector((state) => state.loginTop);
  const firstName = useSelector((state) => state.firstName);
  const createBtn = useSelector((state) => state.createBtn);
  const logIn = useSelector((state) => state.loggedIn);
  const noLoginPage = useSelector((state) => state.noLoginPage);
  const error = useSelector((state) => state.error);
  const loadingImage = useSelector((state) => state.loadingImage);
  const dispatch = useDispatch();

  let handleGuest = (event) => {
    dispatch(displayLoadingImage());
    event.preventDefault();
    axios
      .post('https://shopsmart1234.herokuapp.com/api/auth/login', {
        email: 'guest',
        password: 'guest',
      })
      .then(
        (response) => {
          dispatch(loggedIn());
          dispatch(noDisplayLoadingImage());
          dispatch(noLoginPageDisplay());
          dispatch(
            sendLoginData({
              email: 'guest',
              token: response.data.token,
            })
          );
          var api = 'https://shopsmart1234.herokuapp.com/api/stuff';
          axios
            .get(api, {
              params: {
                email: 'guest',
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
        }
      );
  };

  const loginSubmit = (values) => {
    dispatch(displayLoadingImage());
    if (signUpTop === 'buttonTop') {
      values.email === undefined || values.password === undefined
        ? dispatch(errorFieldEmpty())
        : axios
            .post('https://shopsmart1234.herokuapp.com/api/auth/login', {
              email: values.email.toLowerCase(),
              password: values.password,
            })
            .then(
              (response) => {
                dispatch(loggedIn());
                dispatch(noDisplayLoadingImage());
                dispatch(noLoginPageDisplay());
                dispatch(
                  sendLoginData({
                    email: values.email.toLowerCase(),
                    token: response.data.token,
                  })
                );
                var api = 'https://shopsmart1234.herokuapp.com/api/stuff';
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
              }
            );
    }
    if (signUpTop === 'buttonTopActive') {
      var firstPost = {
        id: '',
        listObject: [],
        email: values.email.toLowerCase(),
        username: values.firstName,
      };

      var api2 = 'https://shopsmart1234.herokuapp.com/api/stuff';

      var api1 = 'https://shopsmart1234.herokuapp.com/api/auth/signup';
      values.email === undefined || values.password === undefined
        ? dispatch(errorFieldEmpty())
        : axios
            .post(api1, {
              email: values.email.toLowerCase(),
              password: values.password,
            })
            .then((response) => {
              axios
                .post('https://shopsmart1234.herokuapp.com/api/auth/login', {
                  email: values.email.toLowerCase(),
                  password: values.password,
                })
                .then(
                  (response) => {
                    dispatch(loggedIn());
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
                  },
                  (error) => {
                    console.log('couldn not login');
                    dispatch(errorSignUpFailed());
                  }
                );
            });
    }
  };
  const { handleSubmit } = props;
  return !logIn ? (
    <div className='fullBackground'>
      <span className={loadingImage}>
        <Loading />
      </span>
      <form onSubmit={handleSubmit(loginSubmit)}>
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

        <button className='btnlogin' type='submit'>
          {createBtn}
        </button>
        <h5>
          Continue as{' '}
          <button className='btnlogin' onClick={handleGuest}>
            Guest
          </button>
        </h5>
      </form>
    </div>
  ) : (
    <Redirect push to='/MyLists' />
  );
};

LoginForm = reduxForm({
  form: 'loginAndSignUp',
})(LoginForm);

export default LoginForm;
