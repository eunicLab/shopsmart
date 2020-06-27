import { combineReducers } from 'redux';
import loggedInReducer from './loggedIn';
import noLoginPageReducer from './noLoginPage';
import firstNameReducer from './firstName';
import signUpTopReducer from './signUpTop';
import loginTopReducer from './loginTop';
import createBtnReducer from './createBtn';
import loadingImageReducer from './loadingImage';
import { reducer as formReducer } from 'redux-form';
import errorReducer from './error';
import loginDataReducer from './loginData';
import openListReducer from './openList';
import openEditTitleReducer from './openEditTitle';
import listObjectReducer from './listObject';
import selectedListReducer from './selectedList';
import selectedItemReducer from './selectedItem';
import navButtonDisplayReducer from './navButtonDisplay';
import goPreviousPageReducer from './goPreviousPage';
import editTypeReducer from './editType';
import IdReducer from './id';

const allReducers = combineReducers({
  loggedIn: loggedInReducer,
  noLoginPage: noLoginPageReducer,
  firstName: firstNameReducer,
  signUpTop: signUpTopReducer,
  loginTop: loginTopReducer,
  createBtn: createBtnReducer,
  loadingImage: loadingImageReducer,
  error: errorReducer,
  loginData: loginDataReducer,
  openList: openListReducer,
  openEditTitle: openEditTitleReducer,
  listObject: listObjectReducer,
  selectedList: selectedListReducer,
  selectedItem: selectedItemReducer,
  navButtonDisplay: navButtonDisplayReducer,
  goPreviousPage: goPreviousPageReducer,
  editType: editTypeReducer,
  id: IdReducer,
  form: formReducer,
});

export default allReducers;
