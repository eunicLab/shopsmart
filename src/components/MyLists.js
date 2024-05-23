import React, { useState } from 'react';
import '../App.css';
import TitleList from './TitleList';
import { useSelector, useDispatch } from 'react-redux';
import { sendListObject, sendSelectedList } from '../actions';
import axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import { AiFillFolderOpen } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import LoginPage from './LoginPage';
import ListItems from './ListItems';
import EditTitle from './EditTitle';
import LogOutPage from './LogOutPage';

let MyLists = () => {
  const selectedList = useSelector((state) => state.selectedList);
  const listObject = useSelector((state) => state.listObject);
  const loginData = useSelector((state) => state.loginData);
  const loggedIn = useSelector((state) => state.loggedIn);

  const id = useSelector((state) => state.id);

  const dispatch = useDispatch();
  const [listTitle, setListTitle] = useState('');
  let handleListTitle = (enteredText) => {
    setListTitle(enteredText.target.value);
  };

  const addTitleHandler = (e) => {
    e.preventDefault();
    if (listTitle !== '') {
      var idRandom = Math.random().toString();
      dispatch(
        sendListObject([
          ...listObject,
          {
            title: listTitle,
            id: idRandom,
            budget: 0,
            list: [],
          },
        ])
      );
      setListTitle('');
      var backendObject = {
        listObject: [
          ...listObject,
          {
            title: listTitle,
            id: idRandom,
            budget: 0,
            list: [],
          },
        ],
      };
      axios
        .put(
          'https://ishopsmartbackend.azurewebsites.net/api/stuff/' + id,
          backendObject,
          {
            headers: { Authorization: `Bearer ${loginData.token}` },
          }
        )
        .then((res) => {
          console.log('updated successfully');
        });
    }
  };

  const removeTitleHandler = () => {
    var backendObject = listObject.filter(
      (number) => number.id !== selectedList.id
    );
    dispatch(sendListObject(backendObject));
    axios
      .put(
        'https://ishopsmartbackend.azurewebsites.net/api/stuff/' + id,
        { listObject: backendObject },
        {
          headers: { Authorization: `Bearer ${loginData.token}` },
        }
      )
      .then((res) => {
        console.log('updated successfully');
      });
    dispatch(
      sendSelectedList({
        id: '',
        title: '',
        list: [],
        budget: 0,
      })
    );
  };

  const ListOfTitles = listObject.map((item) => (
    <TitleList item={item} key={item.id} />
  ));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/Login' component={LoginPage} />
        <Route exact path='/ListItems' component={ListItems} />
        <Route exact path='/EditTitle' component={EditTitle} />
        <Route exact path='/LogOut' component={LogOutPage} />
        <div className='fullbackground'>
          <div className='unscrollable'>
            <div className='NavigationBar'>
              <Link
                exact
                to={loggedIn ? '/LogOut' : '/Login'}
                className='whiteIcon'>
                <FaUser className='backIcon' />
              </Link>
              <span className='navTitle'> My Lists</span>
              <Link
                exact
                to='/ListItems'
                className={
                  selectedList.title !== '' ? 'whiteIcon' : 'noDisplay'
                }>
                <AiFillFolderOpen className='openIcon' />
              </Link>
              <Link
                exact
                to='/EditTitle'
                className={
                  selectedList.title !== '' ? 'whiteIcon' : 'noDisplay'
                }>
                <MdModeEdit className='editIcon' />
              </Link>
              <MdDelete
                className={
                  selectedList.title !== '' ? 'deleteIcon' : 'noDisplay'
                }
                onClick={removeTitleHandler}
              />
            </div>

            <form onSubmit={addTitleHandler} className='inputField'>
              <input
                placeholder='New List'
                className='textField'
                value={listTitle}
                onChange={handleListTitle}
                type='text'
              />
              <button type='submit' className='createListButton'>
                CREATE
              </button>
            </form>
          </div>
          <div className='allTitles'>{ListOfTitles}</div>
        </div>
      </Switch>
    </BrowserRouter>
  );
};
export default MyLists;
