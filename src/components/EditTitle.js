import React, { useState } from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  sendListObject,
  sendSelectedList,
  sendOpenEditTitleState,
} from '../actions';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import MyLists from './MyLists';
import { IoMdArrowRoundBack } from 'react-icons/io';

let EditTitle = (props) => {
  const dispatch = useDispatch();
  const listObject = useSelector((state) => state.listObject);
  const selectedList = useSelector((state) => state.selectedList);
  const [listTitle, setListTitle] = useState(selectedList.title);
  const [listBudget, setListBudget] = useState(selectedList.budget);
  const loginData = useSelector((state) => state.loginData);
  const id = useSelector((state) => state.id);
  var currentListObject = listObject;

  let handleListTitle = (enteredText) => {
    setListTitle(enteredText.target.value);
  };

  let handleListBudget = (enteredText) => {
    setListBudget(enteredText.target.value);
  };

  let editTitleHandler = () => {
    var listSelected = selectedList;
    dispatch(
      sendSelectedList({
        id: '',
        title: '',
        list: [],
        budget: 0,
      })
    );
    dispatch(sendOpenEditTitleState(false));
    for (let i in listObject) {
      if (listObject[i].id === listSelected.id) {
        currentListObject[i] = {
          id: listSelected.id,
          title: listTitle,
          list: listSelected.list,
          budget: listBudget,
        };
      }
    }

    return (
      axios
        .put(
          'https://shopsmart1234.herokuapp.com/api/stuff/' + id,
          {
            listObject: currentListObject,
          },
          {
            headers: { Authorization: `Bearer ${loginData.token}` },
          }
        )
        .then((res) => {
          console.log('updated successfully');
        }),
      dispatch(sendListObject(currentListObject))
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MyLists} />{' '}
        <div className='fullbackground'>
          <div className='NavigationBar'>
            <Link exact to='/' className='whiteIcon'>
              <IoMdArrowRoundBack className='backIcon' />
            </Link>
            <span className='navTitle'> Edit Title</span>
          </div>
          <div className='editPage'>
            <h6 className='label'>List Name</h6>
            <p>
              <input
                value={listTitle}
                className='listEditable'
                onChange={handleListTitle}
                type='text'
              />
            </p>
            <h6 className='label'>Budget</h6>
            <input
              placeholder='$ 0'
              className='listEditable'
              onChange={handleListBudget}
              value={listBudget}
            />
            <Link className='editDone' exact to='/' onClick={editTitleHandler}>
              Done
            </Link>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
};
export default EditTitle;
