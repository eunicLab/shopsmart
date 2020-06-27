import React, { useState } from 'react';
import '../App.css';
import NavigationBar from './NavigationBar';
import TitleList from './TitleList';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { sendListObject } from '../actions';
import axios from 'axios';

let MyLists = (props) => {
  const openList = useSelector((state) => state.openList);
  const openEditTitle = useSelector((state) => state.openEditTitle);
  const selectedList = useSelector((state) => state.selectedList);
  const listObject = useSelector((state) => state.listObject);
  const loginData = useSelector((state) => state.loginData);
  const id = useSelector((state) => state.id);

  const dispatch = useDispatch();
  const [listTitle, setListTitle] = useState('');
  let handleListTitle = (enteredText) => {
    setListTitle(enteredText.target.value);
  };

  const addTitleHandler = () => {
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
          'https://shopsmart1234.herokuapp.com/api/stuff/' + id,
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
        'https://shopsmart1234.herokuapp.com/api/stuff/' + id,
        { listObject: backendObject },
        {
          headers: { Authorization: `Bearer ${loginData.token}` },
        }
      )
      .then((res) => {
        console.log('updated successfully');
      });
  };

  const ListOfTitles = listObject.map((item) => <TitleList item={item} />);

  return !openList && !openEditTitle ? (
    <div className='fullbackground'>
      <NavigationBar title='My Lists' onDelete={removeTitleHandler} />
      <input
        placeholder='New List'
        className='textField'
        value={listTitle}
        onChange={handleListTitle}
        type='text'
      />
      <button onClick={addTitleHandler} className='createListButton'>
        CREATE
      </button>
      {ListOfTitles}
    </div>
  ) : openList ? (
    <Redirect push to='/ListItems' />
  ) : (
    <Redirect push to='/EditTitle' />
  );
};
export default MyLists;
